import styled, { css } from 'styled-components'

type ContainerProps = {
  hasError?: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;

  & + & {
    margin-top: ${props => props.theme.gutters.sm}px;
  }

  > label {
    display: block;
    margin-bottom: ${props => props.theme.gutters.xs}px;
  }

  > input {
    height: 48px;
    background: #f7f7f7;
    border: 1px solid #e2e2e2;
    border-radius: 4px;
    outline: none;
    padding: 0 ${props => props.theme.gutters.sm}px;
    color: #333;
    font-size: 16px;
    transition: box-shadow 0.2s;

    &::-webkit-input-placeholder {
      color: #a6a6a6;
    }
    &::-moz-placeholder {
      color: #a6a6a6;
    }
    &:-ms-input-placeholder {
      color: #a6a6a6;
    }
    &:-moz-placeholder {
      color: #a6a6a6;
    }

    &:focus {
      box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
    }
  }

  > .error-text {
    margin-top: 4px;
  }

  ${props =>
    props.hasError &&
    css`
      > input {
        border-color: ${props => props.theme.colors.error};
      }
    `}
`
