import { PageTemplate } from '../components/templates/PageTemplate'

import { PageContentTemplate } from '../components/templates/PageContent.template'
import { getPageById } from '../lib/api'
import { PageContent } from '../types/PageContent'

type Props = {
  preview: boolean
  data: PageContent
  showheader: boolean
}

const ShopPage = ({ preview, data, showheader = true }: Props) => {
  return (
    <PageTemplate
      preview={preview}
      title={'Shop'}
      header={{
        showMenu: true,
        showLogo: true,
        currentPage: 'shop',
      }}
    >
      <PageContentTemplate content={data.content} title={data.title} coverImage={data.coverImage} />
    </PageTemplate>
  )
}

export default ShopPage

export async function getStaticProps({ preview = false }) {
  const response = (await getPageById('6nqAATYPPd6NDFtKWKRvM2')) ?? null

  return { props: { preview, data: response.data } }
}
