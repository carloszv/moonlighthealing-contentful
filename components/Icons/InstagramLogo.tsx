import { BsInstagram } from 'react-icons/bs'
import styled from 'styled-components'

type Props = {
  src?: string
}

export const InstagramLogo = (props: Props) => {
  return (
    <a href={props.src || 'https://www.instagram.com'} target="_blank">
      <LogoWrapper>
        <BsInstagram size={20} color="white" />
      </LogoWrapper>
    </a>
  )
}

const LogoWrapper = styled.div`
  background-image: linear-gradient(45deg, #fcaf45, #ff5c87, #d6249f, #8534a3);
  padding: 5px;
  border-radius: 20%;
`
