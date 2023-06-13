import styled from 'styled-components'
import { FontColors } from '../theme/Colors'
import { Author } from '../types/Author'
import { CoverImage as CoverImageProps } from '../types/CoverImage'
import { Avatar } from './Avatar'
import { CoverImage } from './CoverImage'
import { Title } from './Title'
import { DateComponent } from './date'
import { MobileStyle } from '../theme/MediaQuery'

type Props = {
  title: string
  coverImage: CoverImageProps
  date: string
  author: Author
}

export const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <StyledTitle>
        <Title>{title}</Title>
      </StyledTitle>

      <div className="mb-8 md:mb-8 sm:mx-0">
        <CoverImage title={title} url={coverImage.url} />
      </div>
      <TextWrapper className="hidden md:block md:mb-12">
        {author && <Avatar name={author.name} picture={author.picture} />}
        <div className="text-lg ml-10">
          <DateComponent dateString={date} />
        </div>
      </TextWrapper>
    </>
  )
}

const StyledTitle = styled.div`
  > div {
    font-size: 72px;
  }

  @media ${MobileStyle} {
    > div {
      font-size: 36px;
    }
  }
`

const TextWrapper = styled.div`
  @media ${MobileStyle} {
    text-align: justify;
    width: 80%;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 20px;
  }

  display: flex;
  align-items: center;
  color: ${FontColors.Tertiary};
  justify-content: right;
  margin-bottom: 20px;
  padding: 0 24px;
`
