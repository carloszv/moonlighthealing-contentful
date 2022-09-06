import styled from 'styled-components'
import { Content } from '../../types/Content'
import { CoverImage } from '../CoverImage'
import { PostBody } from '../PostBody'

export type Props = {
  title: string
  content: Content
  coverImage: {
    url: string
  }
}

export const HomePageTemplate = (props: Props) => {
  return (
    <section>
      <CoverImageWrapper>
        <CoverImage title={props.title} url={props.coverImage.url} />
      </CoverImageWrapper>
      <PostBodyWrapper>
        <PostBody {...props.content} />
      </PostBodyWrapper>
    </section>
  )
}

const CoverImageWrapper = styled.div`
  display: flex;
`
const PostBodyWrapper = styled.div`
  display: flex;
`
