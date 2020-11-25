import { ButtonHTMLAttributes, ReactNode } from 'react'

import { Container } from './styles'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  color?: 'gray'
  variant?: 'contained'
}

export default function Button({
  children,
  color,
  variant,
  ...rest
}: Props): JSX.Element {
  return (
    <Container color={color} variant={variant} {...rest}>
      {children}
    </Container>
  )
}
