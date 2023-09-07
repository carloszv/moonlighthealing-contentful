import { PageTemplate } from '../components/templates/PageTemplate'

import { PageContentTemplate } from '../components/templates/PageContent.template'
import { getPageById } from '../lib/api'
import { PageContent } from '../types/PageContent'

type Props = {
  preview: boolean
  data: PageContent
  showheader: boolean
}

const AboutPage = ({ preview, data, showheader = true }: Props) => {
  return (
    <PageTemplate
      preview={preview}
      title={'About me'}
      header={{
        showMenu: true,
        showLogo: true,
        currentPage: 'about',
      }}
    >
      <PageContentTemplate
        content={data.content}
        title={data.title}
        coverImage={{ ...data.coverImage, style: { width: 400, height: 300 } }}
      />
    </PageTemplate>
  )
}

export default AboutPage

export async function getStaticProps({ preview = false }) {
  const response = (await getPageById('nBfxZ8XhmwKMkd5WtbMls')) ?? null

  return { props: { preview, data: response.data } }
}
