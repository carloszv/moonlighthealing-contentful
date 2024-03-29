const POST_GRAPHQL_FIELDS = `
sys {
  id
}
slug
title
showTitle
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
  pageCollection {
    items {
      sys {
        id
      }
    }
  }
}
`
const BIO_PAGE = `
bio(id: "57ilqEjJriTQFMyhY2h2xT") {
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

const pageQuery = (id: string) => `
page(id: "${id}") {
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

const PAGE_COLLECTION = `
pageCollection {
  items {
    sys {
      id
    }
    title
    description
    coverImage {
      url
    }
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
  return fetchResponse?.data?.postCollection?.items?.[0]
}

function extractPostEntries(fetchResponse: any) {
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
  const entryHome = await fetchGraphQL(
    `query {
      ${HOME_PAGE}
      ${PAGE_COLLECTION}
    }`,
    true,
  )

  return {
    home: { ...entryHome.data?.home },
    pages: entryHome.data?.pageCollection.items,
  }
}

export async function getPageById(id: string) {
  const response = await fetchGraphQL(
    `query {
      ${pageQuery(id)}
    }`,
    true,
  )

  return {
    data: { ...response.data?.page },
  }
}
