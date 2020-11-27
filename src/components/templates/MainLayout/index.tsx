import { ReactNode } from 'react'

import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'

import { Container } from './styles'
import FeedbackModal from '@/components/organisms/FeedbackModal'
import { useTypedSelector } from '@/store/rootReducer'

type Props = {
  children: ReactNode
}

export default function MainLayout({ children }: Props): JSX.Element {
  const feedback = useTypedSelector(state => state.feedback)

  return (
    <Container>
      <Header />
      {children}
      <Footer />
      <FeedbackModal message={feedback.message} />
    </Container>
  )
}
