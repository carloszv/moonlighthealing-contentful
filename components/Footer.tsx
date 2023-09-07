import styled from 'styled-components'
import { Container } from './container'

import { FontColors } from '../theme/Colors'
import { FacebookLogo } from './Icons/FacebookLogo'
import { InstagramLogo } from './Icons/InstagramLogo'
import { TwitterLogo } from './Icons/TwitterLogo'
import { MobileStyle } from '../theme/MediaQuery'
import { EmailLogo } from './Icons/EmailLogo'

export const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterContainer>
          <FooterSocialIcons>
            <EmailLogo src="info@moonlighthealing.net" />
            <InstagramLogo src="https://www.instagram.com/moonlighthealing.ca/" />
          </FooterSocialIcons>
          <FooterText>
            <p>&copy; 2023 Moonlight Healing. All rights reserved.</p>
          </FooterText>
        </FooterContainer>
      </Container>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  border-top: 1px solid ${FontColors.Primary};
`

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%;
`

const FooterSocialIcons = styled.div`
  display: flex;
  a {
    margin-right: 10px;
    color: #333;
    text-decoration: none;
    font-size: 20px;
  }
`

const FooterText = styled.div`
  color: ${FontColors.Tertiary};
  font-weight: 400;

  @media ${MobileStyle} {
    text-align: right;
  }
`
