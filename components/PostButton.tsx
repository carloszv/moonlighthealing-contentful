import styled from 'styled-components'
import { FontColors } from '../theme/Colors'

type Props = {
  title: string
  onClick: () => void
}

export const PostButton = (props: Props) => {
  return <Wrapper onClick={props.onClick}>{props.title}</Wrapper>
}

const Wrapper = styled.div`
  border: 1px solid ${FontColors.Dark};
  border-radius: 10px;
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12px auto;
  background-color: ${FontColors.Light};
  font-color: ${FontColors.Dark};

  &:hover {
    background-color: ${FontColors.Dark};
    color: ${FontColors.Light};
    cursor: pointer;
  }
`
