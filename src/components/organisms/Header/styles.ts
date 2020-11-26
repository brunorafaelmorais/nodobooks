import styled from 'styled-components'

export const Container = styled.header`
  padding-top: 26px;

  > div {
    display: flex;
  }

  .logo-container {
    display: inline-flex;
    align-items: center;
    user-select: none;
  }

  .logo-container > .logoText {
    margin-left: ${props => props.theme.gutters.sm}px;
  }

  .link-to-home {
    display: inline-flex;
  }
`
