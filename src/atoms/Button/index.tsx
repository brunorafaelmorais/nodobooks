import { ButtonHTMLAttributes, ReactNode } from 'react'

import { Container } from './styles'

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  color?: 'primary' | 'gray'
  outlined?: boolean
}

export default function Button({
  children,
  color = 'primary',
  outlined = false,
  ...rest
}: Props): JSX.Element {
  return (
    <Container color={color} outlined={outlined} {...rest}>
      {children}
    </Container>
  )
}
