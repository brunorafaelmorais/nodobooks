import { Container } from './styles'

type Props = {
  className?: string
}

export function StarRating({ className }: Props): JSX.Element {
  return (
    <Container className={className}>
      <span>star rating</span>
    </Container>
  )
}
