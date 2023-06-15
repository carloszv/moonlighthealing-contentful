import styled from 'styled-components'

import { HeroImage } from '../HeroImage'
import { MoreStories } from '../MoreStories'
import { Title } from '../Title'
import { Post } from '../../types/Post'
import { Container } from '../container'

type Props = {
  allPosts: Array<Post>
}

export const PostsPageTemplate = ({ allPosts }: Props) => {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <Container>
      {heroPost ? (
        <HeroWrapper>
          <Title>Workshops</Title>
          <HeroImage
            imageSrc={heroPost.coverImage.url}
            title={heroPost.title}
            subtitle={heroPost.excerpt}
            slug={heroPost.slug}
          />
        </HeroWrapper>
      ) : null}
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    </Container>
  )
}

const HeroWrapper = styled.div`
  margin-top: 288px;
  text-align: center;
`
