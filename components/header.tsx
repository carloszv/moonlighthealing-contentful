import Image from 'next/image'
import { useState } from 'react'
import styled from 'styled-components'
import { HeaderProps } from '../types/Header'
import { AppSidebar, SidebarItem } from './appSideBar'
import { ContentfulImage } from './contentful-image'

export const Header = (props: HeaderProps & { sidebarItems: Array<SidebarItem> }) => {
  const { title, menu, logo, sidebarItems } = props
  const size = 288

  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <HeaderWrapper>
      {sidebarItems.length > 0 && (
        <AppSidebar open={showSidebar} close={() => setShowSidebar(false)} sidebarItems={sidebarItems} />
      )}
      {logo?.url && <ContentfulImage src={logo.url} alt={logo.description} width={size} height={size} />}
      {menu && (
        <Menu onClick={() => setShowSidebar(!showSidebar)} data-test-id="menu">
          <ContentfulImage src="/menu.svg" width={40} height={40} alt="Menu" />
        </Menu>
      )}
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  display: flex;
`

const Menu = styled.div`
  display: flex;
  padding: 12px;
  margin-left: auto;
  cursor: pointer;
`
