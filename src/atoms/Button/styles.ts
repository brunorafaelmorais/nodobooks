import styled, { css } from 'styled-components'
import { darken } from 'polished'

type ContainerProps = {
  color?: 'gray'
  variant?: 'contained'
}

export const Container = styled.button<ContainerProps>`
  height: 45px;
  border-width: 1px;
  border-style: solid;
  text-transform: uppercase;
  outline: none;
  background-color: transparent;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  min-width: 176px;
  padding: 0 ${props => props.theme.gutters.sm}px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  user-select: none;
  cursor: pointer;

  color: ${props => props.theme.colors.primary};
  border-color: ${props => props.theme.colors.primary};

  & + & {
    margin-left: ${props => props.theme.gutters.xs}px;
  }

  &[disabled] {
    pointer-events: none;
    opacity: 0.7;
  }

  ${props =>
    props.variant !== 'contained' &&
    css`
      &:hover {
        background-color: ${props => props.theme.colors.primary};
        color: #fff;
      }
    `}

  ${props =>
    props.color === 'gray' &&
    css`
      border-color: #666;
      color: #666;

      &:hover {
        background-color: #666;
        color: #fff;
      }
    `}

  ${props =>
    props.variant === 'contained' &&
    props.color !== 'gray' &&
    css`
      background-color: ${props => props.theme.colors.primary};
      color: #fff;
      border-width: 0;

      &:hover {
        background-color: ${darken(0.1, props.theme.colors.primary)};
      }
    `}

  ${props =>
    props.variant === 'contained' &&
    props.color === 'gray' &&
    css`
      background-color: #666;
      color: #fff;
      border-width: 0;

      &:hover {
        background-color: ${darken(0.1, '#666')};
      }
    `}
`
