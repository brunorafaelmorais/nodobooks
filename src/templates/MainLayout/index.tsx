import { ReactNode } from 'react'

import Footer from '@/organisms/Footer'
import Header from '@/organisms/Header'

import { Container } from './styles'

type Props = {
  children: ReactNode
}

export default function MainLayout({ children }: Props): JSX.Element {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  )
}
