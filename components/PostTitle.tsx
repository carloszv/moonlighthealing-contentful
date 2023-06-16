import { FontColors } from '../theme/Colors'

type Props = { children: React.ReactNode }

export const PostTitle = ({ children }: Props) => {
  return (
    <h1
      className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left"
      style={{ color: FontColors.Tertiary }}
    >
      {children}
    </h1>
  )
}
