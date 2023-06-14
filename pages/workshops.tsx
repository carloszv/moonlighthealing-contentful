import { PageTemplate } from '../components/templates/PageTemplate'
import { PostsPageTemplate } from '../components/templates/PostsPage.template'

import { getAllPostsForHome } from '../lib/api'
import { Post } from '../types/Post'

type Props = {
  preview: boolean
  allPosts: Array<Post>
  showheader: boolean
}

const Posts = ({ preview, allPosts, showheader = true }: Props) => {
  return (
    <PageTemplate
      preview={preview}
      title={'Workshops'}
      header={{
        showMenu: true,
        showLogo: true,
        currentPage: 'workshops',
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
