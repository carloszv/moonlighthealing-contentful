import styled from 'styled-components'
import { FontColors } from '../theme/Colors'

import { Post } from '../types/Post'
import PostPreview from './PostPreview'

type Props = {
  posts: Array<Omit<Post, 'content'>>
}

export const MoreStories = (props: Props) => {
  return (
    <section>
      <Title>More Stories</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {props.posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

const Title = styled.div`
  padding: 20px 0px;
  display: flex;
  align-items: center;
  text-align: center;
  place-content: center;
  font-size: 48px;
  color: ${FontColors.Tertiary};
  font-weight: 400;
`
