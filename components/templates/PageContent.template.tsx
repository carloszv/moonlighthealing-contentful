import styled from 'styled-components'

import { CoverImage } from '../CoverImage'
import { PostBody } from '../PostBody'
import { Title } from '../Title'
import { Container } from '../container'
import { PageContent as Props } from '../../types/PageContent'

export const PageContentTemplate = (props: Props) => {
  return (
    <section>
      <Container>
        <CoverImageWrapper>
          <CoverImage title={props.title} url={props.coverImage.url} />
        </CoverImageWrapper>
        <Title style={{ marginTop: 50 }}>{props.title}</Title>
        <PostBodyWrapper>
          <PostBody {...props.content} />
        </PostBodyWrapper>
      </Container>
    </section>
  )
}

const CoverImageWrapper = styled.div`
  display: flex;
  margin-top: 288px;
`
const PostBodyWrapper = styled.div`
  display: flex;
  margin-right: auto;
  margin-left: auto;
`
