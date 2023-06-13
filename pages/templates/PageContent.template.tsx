import styled from 'styled-components'

import { CoverImage } from '../../components/CoverImage'
import { PostBody } from '../../components/PostBody'
import { Title } from '../../components/Title'
import { Container } from '../../components/container'
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
