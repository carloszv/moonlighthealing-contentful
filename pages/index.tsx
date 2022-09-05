import { Container } from '../components/container'
import MoreStories from '../components/more-stories'
import { HeroPost, PostProps } from '../components/hero-post'
import { Intro } from '../components/intro'
import { Layout } from '../components/layout'
import { getAllPostsForHome, getHeader } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import { Header } from '../components/header'
import { HeaderProps } from '../types/Header'

type Props = {
  preview: any
  allPosts: any
  headerProps: HeaderProps
}

const Index = ({ preview, allPosts, headerProps }: Props) => {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)

  const sidebarItems = allPosts.map((post: PostProps) => ({ label: post.title, link: post.slug }))
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>

        <Container>
          <Header {...headerProps} sidebarItems={sidebarItems} />
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

export default Index

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? []
  const headerProps = (await getHeader()) ?? null
  return {
    props: { preview, allPosts, headerProps },
  }
}
