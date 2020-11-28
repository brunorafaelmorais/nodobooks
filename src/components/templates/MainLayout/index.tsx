import { ReactNode, useEffect } from 'react'

import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'

import { Container } from './styles'
import AlertModal from '@/components/organisms/AlertModal'
import { useTypedSelector } from '@/store/rootReducer'

type Props = {
  children: ReactNode
}

export default function MainLayout({ children }: Props): JSX.Element {
  const alert = useTypedSelector(state => state.alert)
  const { categoriesAsideIsOpen } = useTypedSelector(state => state.ui)

  useEffect(() => {
    if (categoriesAsideIsOpen) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
    }
  }, [categoriesAsideIsOpen])

  return (
    <>
      <Container>
        <Header />
        {children}
        <Footer />
      </Container>
      <AlertModal message={alert.message} />
    </>
  )
}
