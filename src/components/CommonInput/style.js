import styled from 'vue-styled-components'
import Colors from '@/styles/colors'

const inputProps = {}

export const Input = styled('input', inputProps)`
  background: ${Colors.BLACK};
  border: ${Colors.SUCCESS} 1px solid;
  padding: 5px 5px;
  text-align: center;
  color: ${Colors.WHITE};

  &::placeholder {
    color: ${Colors.WHITE_DARK};
  }
`
