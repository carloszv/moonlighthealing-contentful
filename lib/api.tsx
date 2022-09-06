const POST_GRAPHQL_FIELDS = `
slug
title
coverImage {
  url
}
date
author {
  name
  picture {
    url
  }
}
excerpt
content {
  json
  links {
    assets {
      block {
        sys {
          id
        }
        url
        description
      }
    }
  }
}
`

const HOME_PAGE = `
home(id: "zJYJHj8Z59zP6ymGEfq6x") {
  title
  content {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          url
          description
        }
      }
    }
  }
  coverImage {
    url
  }
}
`

async function fetchGraphQL(query: string, preview = false) {
  return fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${
        preview ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.CONTENTFUL_ACCESS_TOKEN
      }`,
    },
    body: JSON.stringify({ query }),
  }).then((response) => response.json())
}

function extractPost(fetchResponse: any) {
  console.log(fetchResponse?.data?.postCollection)
  return fetchResponse?.data?.postCollection?.items?.[0]
}

function extractPostEntries(fetchResponse: any) {
  console.log(fetchResponse?.data?.postCollection?.items[0].coverImage)
  console.log(fetchResponse?.data?.postCollection?.items[0].author)
  console.log(fetchResponse?.data?.postCollection?.items[0].content)
  return fetchResponse?.data?.postCollection?.items
}

export async function getPreviewPostBySlug(slug: string) {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    true,
  )
  return extractPost(entry)
}

export async function getAllPostsWithSlug() {
  const entries = await fetchGraphQL(
    `query {
      postCollection(where: { slug_exists: true }, order: date_DESC) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
  )
  return extractPostEntries(entries)
}

export async function getAllPostsForHome(preview: boolean) {
  const entries = await fetchGraphQL(
    `query {
      postCollection(order: date_DESC, preview: ${preview ? 'true' : 'false'}) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview,
  )
  return extractPostEntries(entries)
}

export async function getPostAndMorePosts(slug: string | string[] | undefined, preview: boolean) {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" }, preview: ${preview ? 'true' : 'false'}, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview,
  )
  const entries = await fetchGraphQL(
    `query {
      postCollection(where: { slug_not_in: "${slug}" }, order: date_DESC, preview: ${
      preview ? 'true' : 'false'
    }, limit: 2) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview,
  )
  return {
    post: extractPost(entry),
    morePosts: extractPostEntries(entries),
  }
}

export async function getHeader() {
  const entry = await fetchGraphQL(
    `query {
      headerCollection(where: {logo_exists: true}, order: title_ASC) {
        items {
          title
          menu
          logo {
            description
            url
          }
        }
      }
    }`,
    true,
  )
  return entry.data?.headerCollection?.items?.[0]
}

export async function getHomePage() {
  const entry = await fetchGraphQL(
    `query {
      ${HOME_PAGE}
    }`,
    true,
  )
  return entry.data?.home
}
