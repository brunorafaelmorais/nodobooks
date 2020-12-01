import Typography from '../Typography'
import { Container } from './styles'

export type Props = {
  text: string
}

export default function FallbackLoading({ text }: Props): JSX.Element {
  return (
    <Container>
      <Typography>{text}</Typography>
    </Container>
  )
}
