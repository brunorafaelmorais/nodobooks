import { ReactNode } from 'react'

import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'

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
