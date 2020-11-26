import Logo from '@/atoms/Logo'
import Typography from '@/atoms/Typography'
import { ContentBox } from '@/molecules/ContentBox/styles'

import { Container } from './styles'

export default function Header(): JSX.Element {
  return (
    <Container>
      <ContentBox>
        <div className="logoContainer">
          <Logo path="/logo.svg" />
          <Typography
            className="logoText"
            fontSize={24}
            fontWeight={700}
            font="Montserrat"
          >
            Bookstore
          </Typography>
        </div>
      </ContentBox>
    </Container>
  )
}
