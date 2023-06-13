import { HomePageTemplate } from './templates/HomePage.template'
import { PageTemplate } from './templates/PageTemplate'
import { getHomePage } from '../lib/api'
import { PROJECT_NAME } from '../lib/constants'
import { Home } from '../types/Home'
import { Page } from '../types/Page'
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
    <PageTemplate
      preview={preview}
      title={PROJECT_NAME}
      header={{
        showMenu: true,
        showLogo: true,
        currentPage: 'home',
      }}
    >
      <HomePageTemplate homeContent={pageContent} pageList={pageList} />
    </PageTemplate>
  )
}

export default Index

export async function getStaticProps({ preview = false }) {
  const content = (await getHomePage()) ?? null

  return { props: { preview, content } }
}
