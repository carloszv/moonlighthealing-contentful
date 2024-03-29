import { Author } from './Author'
import { Content } from './Content'
import { CoverImage } from './CoverImage'

export type Home = {
  title: string
  coverImage: CoverImage
  content: Content
  pageCollection?: { items: Array<{ sys: { id: string } }> }
}
