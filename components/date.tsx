import { format } from 'date-fns'

type Props = {
  dateString: string
}

export const DateComponent = ({ dateString }: Props) => {
  return <time dateTime={dateString}>{format(new Date(dateString), 'LLLL	d, yyyy')}</time>
}
