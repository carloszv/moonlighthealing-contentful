import styled from 'styled-components'

import { Colors, FontColors } from '../../theme/Colors'
import { Home } from '../../types/Home'
import { Page } from '../../types/Page'
import { ContentfulImage } from '../ContentfulImage'
import { CoverImage } from '../CoverImage'
import { PostBody } from '../PostBody'
import { Title } from '../Title'
import { Container } from '../container'

export type Props = {
  homeContent: Home
  pageList: Array<Page>
}

export const HomePageTemplate = (props: Props) => {
  return (
    <section>
      <Container>
        <CoverImageWrapper>
          <CoverImage title={props.homeContent.title} url={props.homeContent.coverImage.url} />
        </CoverImageWrapper>
        <Title style={{ marginTop: 50 }}>{props.homeContent.title}</Title>
        <PostBodyWrapper>
          <PostBody {...props.homeContent.content} />
        </PostBodyWrapper>
        <PageListWrapper>
          {props.pageList.map((page, index) => (
            <PageWrapper tabIndex={index} key={index}>
              <Title style={{ marginTop: 50 }}>{page.title}</Title>
              <PageImageWrapper>
                <ContentfulImage
                  src={page.coverImage.url}
                  title={page.coverImage.title}
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
    </section>
  )
}

const CoverImageWrapper = styled.div`
  display: flex;
  margin-top: 288px;
  place-content: center;
`
const PostBodyWrapper = styled.div`
  display: flex;
  cursor: default;
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
  cursor: default;
  justify-content: space-between;
  flex-direction: ${({ tabIndex }) => (tabIndex % 2 === 0 ? '' : 'row-reverse')};
  width: 100%;
`

const PageImageWrapper = styled.div`
  width: 400px;
  height: 300px;
  padding: 20px;
  display: flex;
  border-radius: 10px;
  cursor: default;
  overflow: auto;
  position: relative;
`
