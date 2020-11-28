import styled from 'styled-components'

export const Container = styled.div`
  .container-text-result {
    margin-top: ${props => props.theme.gutters.sm}px;
  }

  @media screen and (min-width: 992px) {
    .container-text-result {
      margin-top: ${props => props.theme.gutters.xl}px;
    }
  }
`
