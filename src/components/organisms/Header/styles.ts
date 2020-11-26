import styled from 'styled-components'

export const Container = styled.header`
  padding-top: 26px;

  > div {
    display: flex;
  }

  .logoContainer {
    display: inline-flex;
    align-items: center;
  }

  .logoContainer > .logoText {
    margin-left: ${props => props.theme.gutters.sm}px;
  }
`
