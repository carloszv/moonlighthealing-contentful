import styled from 'styled-components'

import { MoreStories } from '../../components/MoreStories'
import { PostBody } from '../../components/PostBody'
import { PostHeader } from '../../components/PostHeader'
import SectionSeparator from '../../components/section-separator'

type Props = {
  post: any
  morePosts: any
}

export const PostPageTemplate = ({ post, morePosts }: Props) => {
  return (
    <PostWrapper>
      <article>
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
    </PostWrapper>
  )
}

const PostWrapper = styled.div`
  margin-top: 288px;
`
