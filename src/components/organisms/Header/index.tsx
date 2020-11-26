import Link from 'next/link'

import Logo from '@/components/atoms/Logo'
import Typography from '@/components/atoms/Typography'
import { ContentBox } from '@/components/molecules/ContentBox/styles'

import { Container } from './styles'

export default function Header(): JSX.Element {
  return (
    <Container>
      <ContentBox>
        <Link href="/">
          <a className="link-to-home">
            <div className="logo-container">
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
          </a>
        </Link>
      </ContentBox>
    </Container>
  )
}
