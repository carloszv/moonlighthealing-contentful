import styled from 'styled-components'
import { ContentfulImage } from '../components/ContentfulImage'
import { PROJECT_NAME } from '../lib/constants'
import { PageTemplate } from '../components/templates/PageTemplate'

const ComingSoonPage = () => {
  return (
    <PageTemplate
      preview={false}
      title={'Coming Soon'}
      header={{
        showMenu: true,
        showLogo: true,
        currentPage: 'coming-soon',
      }}
    >
      <ImageWrapper>
        <ContentfulImage src="/coming-soon.png" alt={PROJECT_NAME} width={1280} height={847} />
      </ImageWrapper>
    </PageTemplate>
  )
}

export default ComingSoonPage

const ImageWrapper = styled.div`
  display: flex;
  margin-top: 288px;
  justify-content: center;
`
