import Head from 'next/head'

import { AppHeader } from '../components/AppHeader'
import { Container } from '../components/container'
import { Layout } from '../components/Layout'
import { BioPageTemplate } from '../components/templates/BioPage.template'
import { HomePageTemplate } from '../components/templates/HomePage.template'
import { getHomePage } from '../lib/api'
import { PROJECT_NAME } from '../lib/constants'
import { Home } from '../types/Home'

type Props = {
  preview: any
  content: {
    home: Home
    bio: Home
  }
}

const Index = ({ preview, content }: Props) => (
  <Layout preview={preview}>
    <Head>
      <title>{PROJECT_NAME}</title>
    </Head>

    <Container>
      <AppHeader showMenu={true} showLogo={false} />
      <HomePageTemplate {...content.home} />
      <BioPageTemplate {...content.bio} />
    </Container>
  </Layout>
)

export default Index

export async function getStaticProps({ preview = false }) {
  const content = (await getHomePage()) ?? null

  return { props: { preview, content } }
}
