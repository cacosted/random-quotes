import styled from 'styled-components'
import { colors } from '../../styles/style.config'
export const RandomButton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: .5em;
  padding: .5em 1em;

  &:hover,
  &:focus {
    outline: 2px solid ${colors.main}
  }
`
