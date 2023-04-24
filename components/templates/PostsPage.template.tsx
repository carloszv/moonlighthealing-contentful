import styled from 'styled-components'

import { HeroImage } from '../../components/HeroImage'
import { MoreStories } from '../../components/MoreStories'
import { Title } from '../../components/Title'
import { Container } from '../container'

type Props = {
  allPosts: any
}

export const PostsPageTemplate = ({ allPosts }: Props) => {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <Container>
      {heroPost ? (
        <HeroWrapper>
          <Title>Last Story</Title>
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
`
