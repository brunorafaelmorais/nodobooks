import styled from 'styled-components'

export const ContentBox = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: calc(100% - ${props => props.theme.gutters.sm * 2}px);
  max-width: 1152px;

  @media screen and (min-width: 600px) {
    padding-left: ${props => props.theme.gutters.sm}px;
    padding-right: ${props => props.theme.gutters.sm}px;
  }

  @media screen and (min-width: 992px) {
    max-width: 1168px;
    width: calc(100% - ${props => props.theme.gutters.md * 2}px);
    padding-left: ${props => props.theme.gutters.md}px;
    padding-right: ${props => props.theme.gutters.md}px;
  }
`
