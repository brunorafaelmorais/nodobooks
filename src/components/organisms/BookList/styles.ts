import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-row-gap: 80px;
  grid-column-gap: ${props => props.theme.gutters.xl}px;
  grid-template-columns: repeat(1, 1fr);
  justify-items: stretch;
  align-items: stretch;
  position: relative;
  z-index: 1;

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
