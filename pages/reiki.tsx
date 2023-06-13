import { PageTemplate } from './templates/PageTemplate'

import { PageContentTemplate } from 'templates/PageContent.template'
import { getPageById } from '../lib/api'
import { PageContent } from '../types/PageContent'

type Props = {
  preview: boolean
  data: PageContent
  showheader: boolean
}

const ReikiPage = ({ preview, data, showheader = true }: Props) => {
  return (
    <PageTemplate
      preview={preview}
      title={'Reiki'}
      header={{
        showMenu: true,
        showLogo: true,
        currentPage: 'reiki',
      }}
    >
      <PageContentTemplate content={data.content} title={data.title} coverImage={data.coverImage} />
    </PageTemplate>
  )
}

export default ReikiPage

export async function getStaticProps({ preview = false }) {
  const response = (await getPageById('DJAXSxyabm8Gg01VxnXFY')) ?? null

  return { props: { preview, data: response.data } }
}
