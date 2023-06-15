import styled, { CSSProperties } from 'styled-components'
import { FontColors } from '../theme/Colors'

type Props = {
  children: React.ReactNode
  style?: CSSProperties
}

export const Title = (props: Props) => {
  return <TitleWrapper style={props.style}>{props.children}</TitleWrapper>
}

const TitleWrapper = styled.div`
  padding: 20px 0px;
  display: flex;
  align-items: center;
  text-align: center;
  place-content: center;
  font-size: 48px;
  color: ${FontColors.Dark};
  font-weight: 400;
  font-family: 'Montserrat';
  cursor: default;
`
