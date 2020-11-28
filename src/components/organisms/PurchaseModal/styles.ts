import styled from 'styled-components'

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${props => props.theme.gutters.sm}px;

  @media screen and (min-width: 600px) {
    flex-direction: row;
    justify-content: flex-end;

    margin-top: ${props => props.theme.gutters.md}px;

    > button:not(:last-child) {
      margin-right: ${props => props.theme.gutters.md}px;
    }
  }

  @media screen and (max-width: 600px) {
    > button:not(:last-child) {
      margin-bottom: ${props => props.theme.gutters.sm}px;
    }
  }
`

export const FormContainer = styled.form`
  margin-top: ${props => props.theme.gutters.sm}px;
`
