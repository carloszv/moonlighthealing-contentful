import { ContentfulImage } from './ContentfulImage'
import Link from 'next/link'
import cn from 'classnames'
import { CoverImage as CoverImageProps } from '../types/CoverImage'

export const CoverImage = ({ title, url, slug }: CoverImageProps) => {
  const image = (
    <ContentfulImage
      width={2000}
      height={1000}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
      src={url}
    />
  )

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/workshops/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
