import styled from 'styled-components'
import { MobileStyle } from '../theme/MediaQuery'

type Props = { children: React.ReactNode }

export const Container = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.div`
  display: contents;
  width: 100%;
  padding-left: 1.25rem;
  margin-left: auto;
  margin-right: auto;
  padding-right: 1.25rem;
`
