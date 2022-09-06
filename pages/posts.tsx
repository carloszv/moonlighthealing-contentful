import Head from 'next/head'

import { AppHeader } from '../components/AppHeader'
import { Container } from '../components/container'
import { HeroPost } from '../components/HeroPost'
import { Layout } from '../components/Layout'
import { MoreStories } from '../components/MoreStories'
import { getAllPostsForHome } from '../lib/api'
import { PROJECT_NAME } from '../lib/constants'
import { Post } from '../types/Post'

type Props = {
  preview: any
  allPosts: any
}

const Posts = ({ preview, allPosts }: Props) => {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)

  const sidebarItems = allPosts.map((post: Post) => ({ label: post.title, link: post.slug }))
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{PROJECT_NAME}</title>
        </Head>

        <Container>
          <AppHeader showMenu={true} showLogo={true} />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export default Posts

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? []
  return {
    props: { preview, allPosts },
  }
}
