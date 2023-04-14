import { AppHeader } from '../components/AppHeader'
import { Container } from '../components/container'
import { HeroImage } from '../components/HeroImage'
import { HeroPost } from '../components/HeroPost'
import { MoreStories } from '../components/MoreStories'
import { Title } from '../components/Title'
import { getAllPostsForHome } from '../lib/api'
import { Post } from '../types/Post'

type Props = {
  preview: any
  allPosts: any
  showheader: boolean
}

const Posts = ({ preview, allPosts, showheader = true }: Props) => {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)

  const sidebarItems = allPosts.map((post: Post) => ({ label: post.title, link: post.slug }))
  return (
    <Container>
      {showheader ? <AppHeader showMenu={true} showLogo={true} currentPage={'posts'} /> : null}
      {heroPost ? (
        <>
          <Title>Last Story</Title>
          <HeroImage
            imageSrc={heroPost.coverImage.url}
            title={heroPost.title}
            subtitle={heroPost.excerpt}
            button={{
              label: 'Check it out!',
              src: heroPost.slug,
            }}
          />
        </>
      ) : null}
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    </Container>
  )
}

export default Posts

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? []
  return {
    props: { preview, allPosts },
  }
}
