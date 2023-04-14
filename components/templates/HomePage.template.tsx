import { useRouter } from 'next/router'
import Posts from 'posts'
import styled from 'styled-components'
import { Colors, FontColors } from '../../theme/Colors'
import { Home } from '../../types/Home'
import { Page } from '../../types/Page'
import { Post } from '../../types/Post'
import { Container } from '../container'
import { ContentfulImage } from '../ContentfulImage'
import { CoverImage } from '../CoverImage'
import { PostBody } from '../PostBody'

export type Props = {
  homeContent: Home
  pageList: Array<Page>
  allPosts: Array<Post>
}

export const HomePageTemplate = (props: Props) => {
  const router = useRouter()

  const gotoPage = (id: string) => {
    router.push('/posts/' + id)
  }
  return (
    <section>
      <Container>
        <CoverImageWrapper>
          <CoverImage title={props.homeContent.title} url={props.homeContent.coverImage.url} />
        </CoverImageWrapper>
        <Title>{props.homeContent.title}</Title>
        <PostBodyWrapper>
          <PostBody {...props.homeContent.content} />
        </PostBodyWrapper>
        <PageListWrapper>
          {props.pageList.map((page, index) => (
            <PageWrapper tabIndex={index} key={index}>
              <Title>{page.title}</Title>
              <PageImageWrapper>
                <ContentfulImage
                  src={page.coverImage.url}
                  title={page.coverImage.title}
                  style={{ width: '100%', height: '100%', position: 'absolute' }}
                  layout={'fill'}
                ></ContentfulImage>
              </PageImageWrapper>

              <PostBodyWrapper>
                <PostBody {...page.content} />
              </PostBodyWrapper>
            </PageWrapper>
          ))}
        </PageListWrapper>
      </Container>

      <Posts preview={false} allPosts={props.allPosts} />
    </section>
  )
}

const Title = styled.div`
  padding: 20px 0px;
  display: flex;
  align-items: center;
  text-align: center;
  place-content: center;
  font-size: 52px;
  color: ${FontColors.Tertiary};
  font-weight: 400;
  font-family: 'Great Vibes', cursive;
`

const CoverImageWrapper = styled.div`
  display: flex;
`
const PostBodyWrapper = styled.div`
  display: flex;
  margin-right: auto;
  margin-left: auto;
`

const PageListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`

const PageWrapper = styled.div<{ tabIndex: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  flex-direction: ${({ tabIndex }) => (tabIndex % 2 === 0 ? '' : 'row-reverse')};
  width: 100%;
`

const PageImageWrapper = styled.div`
  width: 300px;
  height: 300px;
  padding: 20px;
  display: flex;
  border-radius: 10px;
  cursor: default;
  overflow: auto;
  position: relative;
`

const PageTitle = styled.div`
  width: 60%;
  text-align: center;
  font-size: 32px;
  color: ${FontColors.Tertiary};
  font-weight: 400;
  cursor: default;
`

const PageContent = styled.div`
  text-align-last: center;
  cursor: default;
`

const PageDescription = styled.div`
  font-size: 18px;
  color: ${FontColors.Secondary};
`

const PageButton = styled.button`
  background-color: ${Colors.Primary};
  border-radius: 10px;
  color: white;
  font-size: 12px;
  padding: 4px;
  width: 100px;
`
