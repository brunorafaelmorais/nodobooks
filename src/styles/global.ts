import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export default createGlobalStyle`
  ${normalize}

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font: 400 16px 'Open Sans', Arial, Helvetica, sans-serif;
    color: ${props => props.theme.colors.textBlack};
    overflow-x: hidden;
  }

  a { text-decoration: none; }
`
