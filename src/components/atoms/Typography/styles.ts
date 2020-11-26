import styled, { css } from 'styled-components'

export type Props = {
  fullWidth?: boolean
  align?: 'left' | 'center' | 'right'
  font?: 'Open Sans' | 'Montserrat'
  color?: 'textBlack' | 'textGray' | 'error' | 'success'
  fontWeight?: number
  fontSize?: number
}

export const Container = styled.span<Props>`
  color: ${props => props.theme.colors[props.color]};
  text-align: ${props => props.align};
  font-weight: ${props => props.fontWeight};
  font-size: ${props => props.fontSize}px;
  font-family: ${props => props.font}, Arial, Helvetica, sans-serif;

  ${props =>
    props.fullWidth &&
    css`
      display: block;
      width: 100%;
    `};
`
