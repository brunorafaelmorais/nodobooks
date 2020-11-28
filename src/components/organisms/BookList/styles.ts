import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-row-gap: ${props => props.theme.gutters.sm}px;
  grid-column-gap: ${props => props.theme.gutters.sm}px;
  grid-template-columns: repeat(2, 1fr);
  justify-items: stretch;
  align-items: stretch;
  position: relative;
  z-index: 1;

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 992px) {
    grid-column-gap: ${props => props.theme.gutters.md}px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1024px) {
    grid-row-gap: 64px;
    grid-column-gap: ${props => props.theme.gutters.xl}px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1200px) {
    grid-row-gap: 80px;
    grid-column-gap: ${props => props.theme.gutters.xl}px;
  }
`
