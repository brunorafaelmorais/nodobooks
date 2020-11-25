import Logo from '@/atoms/Logo'
import { ContentBox } from '@/molecules/ContentBox/styles'

import { Container } from './styles'

export default function Header(): JSX.Element {
  return (
    <Container>
      <ContentBox>
        <Logo path="/logo.svg" />
      </ContentBox>
    </Container>
  )
}
