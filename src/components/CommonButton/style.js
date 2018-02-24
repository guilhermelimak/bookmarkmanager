import styled from 'vue-styled-components'
import Colors from '@/styles/colors'

const btnProps = { color: String }

const DARK_SUFFIX = '_DARK'

export const Button = styled('button', btnProps)`
  background-color: ${btnProps => Colors[btnProps.color]};
  border-radius: 1px;
  border: none;
  color: white;
  cursor: pointer;
  outline: none;
  padding: 6px 36px;
  transition: all 0.3s;
  margin: 0;

  &:hover {
    background-color: ${btnProps => Colors[`${btnProps.color}${DARK_SUFFIX}`]};
  }
`
