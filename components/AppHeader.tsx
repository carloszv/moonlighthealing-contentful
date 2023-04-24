import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

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
    const handler = () => {
      setSmall((isSmall) => {
        if (!isSmall && (document.body.scrollTop > size || document.documentElement.scrollTop > size)) {
          return true
        }

        if (isSmall && document.body.scrollTop < size && document.documentElement.scrollTop < size) {
          return false
        }

        return isSmall
      })
    }

    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <HeaderWrapper className={small ? 'smallHeader' : 'normalHeader'} small={small}>
      <AppSidebar
        open={showSidebar}
        close={() => setShowSidebar(false)}
        currentPage={props.currentPage}
      />
      {showLogo && (
        <ImageWrapper
          onClick={() => router.push('/')}
          className={small ? 'smallHeader' : 'normalHeader'}
        >
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
  position: fixed;
  top: 0;
  z-index: 100;
  padding: 0px 20px;
  background-color: white;
  transition: all 0.5s ease-in-out;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  &.smallHeader {
    height: 80px;
  }

  &.normalHeader {
    height: 288px;
  }
`

const Menu = styled.div`
  display: flex;
  padding: 12px;
  margin-left: auto;
  cursor: pointer;
`

const ImageWrapper = styled.div`
  cursor: pointer;
  display: flex;
  transition: all 0.5s ease-in-out;

  &.smallHeader {
    width: 80px;
    height: 80px;
  }

  &.normalHeader {
    width: 288px;
    height: 288px;
  }
`
