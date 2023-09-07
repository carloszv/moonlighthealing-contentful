import styled from 'styled-components'

import { Post } from '../../types/Post'
import { PostButton } from '../PostButton'
import { Container } from '../container'

type Props = {
  allPosts: Array<Post>
  onPostClicked: (url: string) => void
}

export const PostsPageTemplate = ({ allPosts, onPostClicked }: Props) => {
  return (
    <Container>
      <PostWrapper>
        {allPosts.map((post, index) => (
          <PostButton
            key={`post_${post.title}_${index}`}
            title={post.title}
            onClick={() => onPostClicked(post.slug)}
          />
        ))}
      </PostWrapper>
    </Container>
  )
}

const PostWrapper = styled.div`
  margin-top: 488px;
`
