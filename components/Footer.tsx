import styled from 'styled-components'
import { Container } from './container'

import { FontColors } from '../theme/Colors'
import { FacebookLogo } from './Icons/FacebookLogo'
import { InstagramLogo } from './Icons/InstagramLogo'
import { TwitterLogo } from './Icons/TwitterLogo'

export const Footer = () => {
  return (
    <FooterWrapper>
      <footer className="bg-accent-1 border-t border-accent-2 mt-50">
        <Container>
          <FooterContainer>
            <FooterSocialIcons>
              <FacebookLogo />
              <TwitterLogo />
              <InstagramLogo />
            </FooterSocialIcons>
            <FooterText>
              <p>&copy; 2023 Moonlight Healing. All rights reserved.</p>
            </FooterText>
          </FooterContainer>
        </Container>
      </footer>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.div`
  margin-top: 50px;
`

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
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
`
