import Image, { ImageProps } from 'next/image'

type Props = {
  src: string
  width: number
  quality?: number
}

const contentfulLoader = ({ src, width, quality }: Props) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

export const ContentfulImage = (props: ImageProps) => {
  return <Image loader={contentfulLoader} {...props} />
}
