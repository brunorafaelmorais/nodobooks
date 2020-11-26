import styled from 'styled-components'

export const Container = styled.footer`
  > div {
    padding-bottom: ${props => props.theme.gutters.lg}px;
  }

  .divider {
    padding-bottom: ${props => props.theme.gutters.lg}px;
    border-top: 1px solid rgba(28, 42, 57, 0.35);
  }
`
