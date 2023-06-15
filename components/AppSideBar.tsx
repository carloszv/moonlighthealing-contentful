import { useRouter } from 'next/router'
import styled, { keyframes } from 'styled-components'
import { Colors, FontColors } from '../theme/Colors'
import { ContentfulImage } from './ContentfulImage'

export type SidebarItem = {
  label: string
  link?: string
  onClick?: () => void
}

type Props = {
  open: boolean
  close: () => void
  sidebarItems?: Array<SidebarItem>
  currentPage?: string
}

const defaultSidebarNavigationItems = [
  { label: 'Home', link: '/' },
  // { label: 'Blog / Library', link: '' },
  { label: 'Workshops', link: '/workshops' },
  // { label: 'Events', link: '' },
  { label: 'Shop', link: '/shop' },
  { label: 'Reiki', link: '/reiki' },
  // { label: 'Intuitive readings', link: '' },
]

export const AppSidebar = (props: Props) => {
  const router = useRouter()

  return (
    <>
      {props.open && <OpacityScreen onClick={props.close} />}

      <SidebarWrapper open={props.open}>
        <SidebarHeader>
          <SidebarCloseIcon onClick={props.close} data-test-id="sidebar-close">
            <ContentfulImage src="/close.svg" width={24} height={24} alt="Close" />
          </SidebarCloseIcon>
        </SidebarHeader>
        {defaultSidebarNavigationItems.map(
          (item) =>
            props.currentPage !== item.label.toLowerCase().replaceAll(' ', '') && (
              <SidebarItem key={item.label} onClick={() => router.push(`${item.link}`)}>
                <p style={{ color: FontColors.Tertiary }}>{item.label}</p>
                <img src="/chevron.svg" alt="arrow" />
              </SidebarItem>
            ),
        )}
      </SidebarWrapper>
    </>
  )
}

const appear = keyframes`
  from {
    opacity: 0%;
  }

  to {
    opacity: 100%;
  }
`

const OpacityScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 99;
  animation: ${appear} 0.3s ease;
`

const SidebarWrapper = styled.div<{ open: boolean }>`
  background: white;
  bottom: 0;
  box-shadow: 0px 4px 32px 4px rgba(0, 0, 0, 0.25);
  position: fixed;
  right: -48px;
  top: 0;
  transform: ${({ open }) => (open ? 'translateX(-48px)' : `translateX(${312 + 48}px)`)};
  transition: all ease 0.7s;
  width: 312px;
  z-index: 100;
`

const SidebarItem = styled.div`
  align-items: center;
  border-bottom: 1px solid ${Colors.Primary};
  cursor: pointer;
  display: flex;
  height: 64px;
  justify-content: space-between;
  padding: 0 24px;
  transition: background 0.2s;
  font-family: 'Montserrat';
  font-size: 28px;

  img {
    width: 8px;
    opacity: 0.5;
  }
`

const SidebarHeader = styled.div`
  align-items: center;
  border-bottom: 1px solid ${Colors.Primary};
  display: flex;
  height: 72px;
  width: 100%;
  justify-content: right;
  padding: 0 16px 0 24px;
`
const SidebarFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  padding: 24px;
`

const SidebarCloseIcon = styled.div`
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  height: 36px;
  justify-content: center;
  opacity: 0.7;
  transition: background 0.2s;
  width: 36px;

  img {
    width: 20px;
    height: 20px;
  }
`
