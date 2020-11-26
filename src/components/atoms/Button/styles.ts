import styled, { css } from 'styled-components'
import { darken } from 'polished'

export type Props = {
  color?: 'primary' | 'gray'
  outlined?: boolean
}

export const Container = styled.button<Props>`
  height: 45px;
  text-transform: uppercase;
  outline: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  min-width: 176px;
  max-width: 100%;
  padding: 0 ${props => props.theme.gutters.sm}px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  user-select: none;
  cursor: pointer;

  & + & {
    margin-left: ${props => props.theme.gutters.xs}px;
  }

  ${props =>
    props.color === 'primary' &&
    css`
      background-color: ${props => props.theme.colors.primary};
      color: #fff;
      border: 0;

      &:hover {
        background-color: ${darken(0.1, props.theme.colors.primary)};
      }
    `}

  ${props =>
    props.color === 'gray' &&
    css`
      background-color: ${props => props.theme.colors.gray};
      color: #fff;
      border: 0;

      &:hover {
        background-color: ${darken(0.1, props.theme.colors.gray)};
      }
    `}

  ${props =>
    props.color === 'primary' &&
    props.outlined &&
    css`
      background-color: transparent;
      color: ${props => props.theme.colors.primary};
      border: 1px solid ${props => props.theme.colors.primary};

      &:hover {
        background-color: ${props => props.theme.colors.primary};
        color: #fff;
      }
    `}

  ${props =>
    props.color === 'gray' &&
    props.outlined &&
    css`
      background-color: transparent;
      color: ${props => props.theme.colors.gray};
      border: 1px solid ${props => props.theme.colors.gray};

      &:hover {
        background-color: ${props => props.theme.colors.gray};
        color: #fff;
      }
    `}
`
