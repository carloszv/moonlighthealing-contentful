import { AiFillFacebook } from 'react-icons/ai'

type Props = {
  src?: string
}

export const FacebookLogo = (props: Props) => {
  return (
    <a href={props.src || 'https://www.facebook.com'}>
      <AiFillFacebook size={30} color="#1877F2" />
    </a>
  )
}
