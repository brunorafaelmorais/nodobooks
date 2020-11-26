import { Container } from './styles'

type Props = {
  path: string
  alt?: string
  className?: string
}

export default function Banner({
  path,
  alt = 'Bookstore banner',
  className
}: Props): JSX.Element {
  return (
    <Container className={className}>
      <img src={path} alt={alt} />
    </Container>
  )
}
