import { useRouter } from 'next/router'
import styled from 'styled-components'
import { CoverImage } from './CoverImage'
import { Title } from './Title'
import { FontColors } from '../theme/Colors'
import { MobileStyle } from '../theme/MediaQuery'

type Props = {
  imageSrc: string
  title: string
  subtitle: string
  slug: string
}

export const HeroImage = (props: Props) => {
  const router = useRouter()

  const gotoPage = () => {
    router.push(`/workshops/${props.slug}`)
  }
  return (
    <section>
      <ImageContainer onClick={gotoPage}>
        <HoverOverlay>
          <CoverImage title={props.title} slug={props.slug} url={props.imageSrc} />
          <HoverContainer>
            <HoverContent>
              <Title>{props.title}</Title>
              <Subtitle>{props.subtitle}</Subtitle>
            </HoverContent>
          </HoverContainer>
        </HoverOverlay>
      </ImageContainer>
    </section>
  )
}

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  cursor: pointer;
`

const HoverContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  text-align: center;

  @media ${MobileStyle} {
    > div {
      font-size: 32px;
    }

    > p {
      font-size: 12px;
    }

    opacity: 1;
  }
`

const Subtitle = styled.p`
  font-size: 18px;
  margin: 0;
  margin-bottom: 20px;
  color: ${FontColors.Tertiary};
`

const HoverContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.2s ease-in-out;

  @media ${MobileStyle} {
    opacity: 1;
  }
`

const HoverOverlay = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  opacity: 1;

  &:hover ${HoverContainer}, &:focus ${HoverContainer} {
    opacity: 1;
  }

  &:hover ${HoverContent}, &:focus ${HoverContent} {
    opacity: 1;
  }
`
