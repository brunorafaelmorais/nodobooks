import styled from 'styled-components'

export const Container = styled.div`
  margin: ${props => props.theme.gutters.sm}px 0;

  > img {
    width: 100%;
    max-width: 1120px;
    display: block;
    margin: auto;
  }

  @media screen and (min-width: 992px) {
    margin: 26px 0;
  }
`
