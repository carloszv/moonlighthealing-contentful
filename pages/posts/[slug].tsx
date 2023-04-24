import type { GetStaticPaths, GetStaticProps } from 'next'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { PostTitle } from '../../components/PostTitle'

import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import { PROJECT_NAME } from '../../lib/constants'
import { PageTemplate } from '../../components/templates/PageTemplate'
import { PostPageTemplate } from '../../components/templates/PostPage.template'

type Props = {
  post: any
  morePosts: any
  preview: boolean
}

const Post = ({ post, morePosts, preview }: Props) => {
  const router = useRouter()

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <PageTemplate
      preview={preview}
      title={post.title ? `${post.title} | ${PROJECT_NAME}` : PROJECT_NAME}
      header={{
        showMenu: true,
        showLogo: true,
        currentPage: '',
      }}
    >
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <PostPageTemplate post={post} morePosts={morePosts} />
      )}
    </PageTemplate>
  )
}

export default Post

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
  const data = await getPostAndMorePosts(params?.slug, preview)

  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? null,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths: allPosts?.map(({ slug }: any) => `/posts/${slug}`) ?? [],
    fallback: true,
  }
}
