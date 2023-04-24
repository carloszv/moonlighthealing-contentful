import { PageTemplate } from '../components/templates/PageTemplate'
import { PostsPageTemplate } from '../components/templates/PostsPage.template'

import { getAllPostsForHome } from '../lib/api'

type Props = {
  preview: any
  allPosts: any
  showheader: boolean
}

const Posts = ({ preview, allPosts, showheader = true }: Props) => {
  return (
    <PageTemplate
      preview={preview}
      title={'POSTS'}
      header={{
        showMenu: true,
        showLogo: true,
        currentPage: 'posts',
      }}
    >
      <PostsPageTemplate allPosts={allPosts} />
    </PageTemplate>
  )
}

export default Posts

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? []
  return {
    props: { preview, allPosts },
  }
}
