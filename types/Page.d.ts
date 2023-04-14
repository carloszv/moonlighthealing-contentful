import { Author } from './Author'
import { Content } from './Content'
import { CoverImage } from './CoverImage'

export type Page = {
  sys: {
    id: string
  }
  title: string
  description: string
  coverImage: CoverImage
  content: Content
}
