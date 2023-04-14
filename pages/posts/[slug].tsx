import type { GetStaticPaths, GetStaticProps } from 'next'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { AppHeader } from '../../components/AppHeader'
import { Container } from '../../components/container'
import { Layout } from '../../components/Layout'
import { MoreStories } from '../../components/MoreStories'
import { PostTitle } from '../../components/PostTitle'
import { PostBody } from '../../components/PostBody'
import { PostHeader } from '../../components/PostHeader'
import SectionSeparator from '../../components/section-separator'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import { PROJECT_NAME } from '../../lib/constants'

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
    <Layout preview={preview}>
      <Container>
        <AppHeader showLogo={true} showMenu={false} currentPage={'posts'} />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title} | {PROJECT_NAME}
                </title>
                <meta property="og:image" content={post.coverImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody {...post.content} />
            </article>
            <SectionSeparator />
            {morePosts && morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
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
