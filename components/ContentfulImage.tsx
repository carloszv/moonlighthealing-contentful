import Image, { ImageLoaderProps, ImageProps } from 'next/image'

const contentfulLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

export const ContentfulImage = (props: ImageProps) => {
  return <Image loader={contentfulLoader} {...props} />
}
