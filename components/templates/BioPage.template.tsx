import styled from 'styled-components'
import { Content } from '../../types/Content'
import { ContentfulImage } from '../ContentfulImage'
import { CoverImage } from '../CoverImage'
import { PostBody } from '../PostBody'
import { FontColors } from '../../theme/Colors'

export type Props = {
  title: string
  content: Content
  coverImage: {
    url: string
  }
}

export const BioPageTemplate = (props: Props) => {
  return (
    <section style={{ marginTop: '40px' }}>
      <TitleWrapper>
        <Title>BIOGRAPHY</Title>
      </TitleWrapper>
      <SectionWrapper>
        <CoverImageWrapper>
          <ContentfulImage src={props.coverImage.url} width={400} height={600} />
        </CoverImageWrapper>
        <PostBodyWrapper>
          <PostBody {...props.content} />
        </PostBodyWrapper>
      </SectionWrapper>
    </section>
  )
}

const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`

const Title = styled.h1`
  color: ${FontColors.Dark};
  font-weight: bold;
  font-size: 72px;
  font-family: Gill Sans;
`

const SectionWrapper = styled.div`
  text-align: center;
`

const CoverImageWrapper = styled.div`
  float: left;
  margin: 5px;
  width: 400px;
  height: 350px;
  margin-right: 40px;
  overflow: hidden;
  border-radius: 20px;
`
const PostBodyWrapper = styled.div`
  text-align: justify;
  font-size: 25px;
  margin-top: 40px;
`
