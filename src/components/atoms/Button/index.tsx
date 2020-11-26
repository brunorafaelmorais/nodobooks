import { ButtonHTMLAttributes, ReactNode } from 'react'

import { Container } from './styles'

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  color?: 'primary' | 'gray'
  outlined?: boolean
  className?: string
}

export default function Button({
  children,
  color = 'primary',
  outlined = false,
  className,
  ...rest
}: Props): JSX.Element {
  return (
    <Container
      className={className}
      color={color}
      outlined={outlined}
      {...rest}
    >
      {children}
    </Container>
  )
}
