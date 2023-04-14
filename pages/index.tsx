import Head from 'next/head'

import { AppHeader } from '../components/AppHeader'
import { Container } from '../components/container'
import { Layout } from '../components/Layout'
import { HomePageTemplate } from '../components/templates/HomePage.template'
import { getAllPostsForHome, getHomePage } from '../lib/api'
import { PROJECT_NAME } from '../lib/constants'
import { Home } from '../types/Home'
import { Page } from '../types/Page'
import { GlobalStyle } from '../styles/globalStyles'
import { Content } from '../types/Content'
import { Post } from '../types/Post'

type Props = {
  preview: any
  content: {
    home: Home
    pages: Array<Page>
  }
  allPosts: Array<Post>
}

const Index = ({ preview, content, allPosts }: Props) => {
  const pageContent: Home = content.home
  const pageList: Array<Page> = content.pages.filter((page) =>
    content.home.pageCollection?.items.some((item) => item.sys.id === page.sys.id),
  )

  return (
    <>
      <GlobalStyle />
      <Layout preview={preview}>
        <Head>
          <title>{PROJECT_NAME}</title>
        </Head>

        <Container>
          <AppHeader showMenu={false} showLogo={true} currentPage={'home'} />
          <HomePageTemplate homeContent={pageContent} pageList={pageList} allPosts={allPosts} />
        </Container>
      </Layout>
    </>
  )
}

export default Index

export async function getStaticProps({ preview = false }) {
  const content = (await getHomePage()) ?? null
  const allPosts = (await getAllPostsForHome(preview)) ?? []

  return { props: { preview, content, allPosts } }
}
