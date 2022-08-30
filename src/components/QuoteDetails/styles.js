import styled, { css } from 'styled-components'
import { colors } from '../../styles/style.config'

const labelId = {
  author: 0,
  category: 1
}

const titleCss = css`
  font-weight: 700;
  font-size: 1.1rem;
`
export const Details = styled.figcaption`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block-start: 5em;
  padding: 2.5em 2em;
  cursor: pointer;

  &:hover {
    background-color: ${colors.main};
    color: ${colors.white}
  }
`

export const Label = styled.p`
  font-size: .8rem;
  ${props => props.id === labelId.author ? titleCss : ''};
  color: ${props => props.id === labelId.category ? colors.light : ''};
`
