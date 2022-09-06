import Head from 'next/head'

import { AppHeader } from '../components/AppHeader'
import { Container } from '../components/container'
import { Layout } from '../components/layout'
import { HomePageTemplate } from '../components/templates/HomePage.template'
import { getAllPostsForHome, getHomePage } from '../lib/api'
import { PROJECT_NAME } from '../lib/constants'
import { Post } from '../types/Post'

type Props = {
  preview: any
  allPosts: Array<Post>
  content: any
}

const Index = ({ preview, allPosts, content }: Props) => {
  const sidebarItems = allPosts.map((post: Post) => ({ label: post.title, link: post.slug }))
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{PROJECT_NAME}</title>
        </Head>

        <Container>
          <AppHeader showMenu={true} showLogo={false} sidebarItems={sidebarItems} />
          <HomePageTemplate {...content} />
        </Container>
      </Layout>
    </>
  )
}

export default Index

export async function getStaticProps({ preview = false }) {
  const content = (await getHomePage()) ?? null
  const allPosts = (await getAllPostsForHome(preview)) ?? []

  return {
    props: { preview, allPosts, content },
  }
}
