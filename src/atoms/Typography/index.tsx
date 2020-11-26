import { ReactNode } from 'react'
import { Container, Props as TypographyProps } from './styles'

export interface Props extends TypographyProps {
  children: ReactNode
}

export default function Typography({
  color = 'textBlack',
  font = 'Open Sans',
  fontSize = 16,
  fontWeight = 400,
  align = 'left',
  fullWidth = false,
  children
}: Props): JSX.Element {
  return (
    <Container
      color={color}
      font={font}
      fontSize={fontSize}
      align={align}
      fontWeight={fontWeight}
      fullWidth={fullWidth}
    >
      {children}
    </Container>
  )
}
