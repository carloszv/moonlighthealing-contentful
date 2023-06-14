import { Author } from './Author'
import { Content } from './Content'
import { CoverImage } from './CoverImage'

export type Post = {
  slug: string
  title: string
  showTitle?: boolean
  coverImage: CoverImage
  date: string
  author: Author
  excerpt: string
  content: Content
}
