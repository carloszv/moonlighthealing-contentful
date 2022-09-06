import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styled from 'styled-components'
import { PROJECT_NAME } from '../lib/constants'
import { HeaderProps } from '../types/Header'
import { AppSidebar } from './AppSideBar'
import { ContentfulImage } from './ContentfulImage'

export const AppHeader = (props: HeaderProps) => {
  const { title, showMenu, showLogo } = props
  const size = 288

  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <HeaderWrapper>
      <AppSidebar open={showSidebar} close={() => setShowSidebar(false)} />
      {showLogo && (
        <ImageWrapper>
          <Link href="/">
            <ContentfulImage src="/logo.svg" alt={PROJECT_NAME} width={size} height={size} />
          </Link>
        </ImageWrapper>
      )}
      {showMenu && (
        <Menu onClick={() => setShowSidebar(!showSidebar)} data-test-id="menu">
          <ContentfulImage src="/menu.svg" width={40} height={40} alt="Menu" />
        </Menu>
      )}
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  display: flex;
  min-height: 100px;
`

const Menu = styled.div`
  display: flex;
  padding: 12px;
  margin-left: auto;
  cursor: pointer;
`

const ImageWrapper = styled.div`
  cursor: pointer;
`
