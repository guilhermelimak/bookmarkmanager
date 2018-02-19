import styled from 'vue-styled-components'
import { PRIMARY } from '@/styles/colors'

export const Button = styled.button`
  color: white;
  background-color: ${PRIMARY};
  padding: 6px 16px;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 1px;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.5);
  }
`
