import Head from 'next/head'
import { ReactNode } from 'react'

import { GlobalStyle } from '../../styles/globalStyles'
import { AppHeader } from '../AppHeader'
import { Layout } from '../Layout'
import { Container } from '../container'

type Props = {
  preview: any
  title: string
  header: {
    showMenu: boolean
    showLogo: boolean
    currentPage: string
  }
  children: ReactNode
}

export const PageTemplate = (props: Props) => {
  return (
    <>
      <GlobalStyle />
      <Layout preview={props.preview}>
        <Head>
          <title>{props.title}</title>
        </Head>
        <Container>
          <AppHeader
            showMenu={props.header.showMenu}
            showLogo={props.header.showLogo}
            currentPage={props.header.currentPage}
          />
          {props.children}
        </Container>
      </Layout>
    </>
  )
}
