import { BsInstagram, BsTwitter } from 'react-icons/bs'

type Props = {
  src?: string
}

export const TwitterLogo = (props: Props) => {
  return (
    <a href={props.src || 'https://www.twitter.com'}>
      <BsTwitter size={30} color="#179CF0" />
    </a>
  )
}
