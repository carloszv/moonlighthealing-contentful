import styled from 'styled-components'
import { Post } from '../types/Post'
import { HeroImage } from './HeroImage'
import { Title } from './Title'

type Props = {
  posts: Array<Omit<Post, 'content'>>
}

export const MoreStories = (props: Props) => {
  return (
    <section>
      <Wrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
          {props.posts.map((post, index) => (
            <HeroImage
              key={`post_${post.title}_${index}`}
              imageSrc={post.coverImage.url}
              title={post.title}
              subtitle={post.excerpt}
              slug={post.slug}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  )
}

const Wrapper = styled.div`
  margin-top: 96px;
  margin-left: 24px;
  margin-right: 24px;
`
