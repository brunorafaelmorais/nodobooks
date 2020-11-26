import { Container } from './styles'

export type Props = {
  path: string
  alt?: string
}

export default function Logo({
  path,
  alt = 'Bookstore logo'
}: Props): JSX.Element {
  return (
    <Container>
      <img src={path} alt={alt} />
    </Container>
  )
}
