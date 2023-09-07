import { AiOutlineMail } from 'react-icons/ai'
import styled from 'styled-components'
import { FontColors } from '../../theme/Colors'

type Props = {
  src?: string
}

export const EmailLogo = (props: Props) => {
  return (
    <a href={`mailto:${props.src}`}>
      <LogoWrapper>
        <AiOutlineMail size={20} color="white" />
      </LogoWrapper>
    </a>
  )
}

const LogoWrapper = styled.div`
  padding: 5px;
  border-radius: 20%;
  background-color: ${FontColors.Primary};
`
