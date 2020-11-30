import styled from 'styled-components'

export const Container = styled.main``

export const LangBox = styled.main`
  position: fixed;
  bottom: ${props => props.theme.gutters.xs}px;
  right: ${props => props.theme.gutters.xs}px;
  z-index: 5;
  display: inline-flex;

  > a {
    width: 24px;
    height: 24px;
    transition: all 0.2s;
    opacity: 0.5;
  }

  > a + a {
    margin-left: 4px;
  }

  > a > img {
    width: 100%;
    height: 100%;
  }

  > a:hover,
  > a.active {
    opacity: 1;
  }
`
