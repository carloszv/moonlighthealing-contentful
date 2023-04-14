import Link from 'next/link'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { PROJECT_NAME } from '../lib/constants'
import { HeaderProps } from '../types/Header'
import { AppSidebar } from './AppSideBar'

import { ContentfulImage } from './ContentfulImage'

export const AppHeader = (props: HeaderProps) => {
  const router = useRouter()
  const { title, showMenu, showLogo } = props
  const size = 288

  const [showSidebar, setShowSidebar] = useState(false)

  const [small, setSmall] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => setSmall(window.pageYOffset > 300))
    }
  }, [])

  return (
    <HeaderWrapper small>
      <AppSidebar
        open={showSidebar}
        close={() => setShowSidebar(false)}
        currentPage={props.currentPage}
      />
      {showLogo && (
        <ImageWrapper onClick={() => router.push('/')}>
          <ContentfulImage src="/logo.svg" alt={PROJECT_NAME} width={size} height={size} />
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

const HeaderWrapper = styled.div<{ small: boolean }>`
  display: flex;
  min-height: 80px;
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 0 20px;

  background-color: ${({ small }) => small && 'white'};
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
