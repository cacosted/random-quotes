import { createGlobalStyle } from 'styled-components'
import { colors, fonts } from './style.config'
export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${fonts.regular};
    color: ${colors.main}
  }
`
