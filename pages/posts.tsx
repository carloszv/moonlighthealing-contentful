import { PageTemplate } from './templates/PageTemplate'
import { PostsPageTemplate } from './templates/PostsPage.template'

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
