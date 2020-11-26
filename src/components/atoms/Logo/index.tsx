import { Container } from './styles'

export type Props = {
  path: string
  alt?: string
  className?: string
}

export default function Logo({
  path,
  alt = 'Bookstore logo',
  className
}: Props): JSX.Element {
  return (
    <Container className={className}>
      <img src={path} alt={alt} />
    </Container>
  )
}
