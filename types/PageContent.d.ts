import { Author } from './Author'
import { Content } from './Content'
import { CoverImage } from './CoverImage'

export type PageContent = {
  title: string
  coverImage: CoverImage
  content: Content
}
