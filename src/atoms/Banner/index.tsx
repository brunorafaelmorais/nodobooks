import { Container } from './styles'

type Props = {
  path: string
  alt?: string
}

export default function Banner({
  path,
  alt = 'Bookstore banner'
}: Props): JSX.Element {
  return (
    <Container>
      <img src={path} alt={alt} />
    </Container>
  )
}
