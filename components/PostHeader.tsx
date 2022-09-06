import { Avatar } from './Avatar'
import { DateComponent } from './date'
import { CoverImage } from './CoverImage'
import { PostTitle } from './PostTitle'
import { CoverImage as CoverImageProps } from '../types/CoverImage'
import { Author } from '../types/Author'
import { FontColors } from '../theme/Colors'

type Props = {
  title: string
  coverImage: CoverImageProps
  date: string
  author: Author
}

export const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div
        className="hidden md:block md:mb-12"
        style={{ display: 'flex', alignItems: 'center', color: FontColors.Tertiary }}
      >
        {author && <Avatar name={author.name} picture={author.picture} />}
        <div className="text-lg ml-10">
          <DateComponent dateString={date} />
        </div>
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} url={coverImage.url} />
      </div>
    </>
  )
}
