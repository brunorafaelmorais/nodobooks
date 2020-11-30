import { ReactNode, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'
import AlertModal from '@/components/organisms/AlertModal'

import { useTypedSelector } from '@/store/rootReducer'

import { Container, LangBox } from './styles'

type Props = {
  children: ReactNode
}

export default function MainLayout({ children }: Props): JSX.Element {
  const alert = useTypedSelector(state => state.alert)
  const { categoriesAsideIsOpen } = useTypedSelector(state => state.ui)

  const router = useRouter()

  const { locale } = router

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
      <LangBox>
        <Link href="/" locale="en">
          <a className={locale === 'en' ? 'active' : ''}>
            <img src="/ico_en.svg" alt="Flag" />
          </a>
        </Link>
        <Link href="/" locale="pt-BR">
          <a className={locale === 'pt-BR' ? 'active' : ''}>
            <img src="/ico_pt.svg" alt="Flag" />
          </a>
        </Link>
      </LangBox>
      <AlertModal message={alert.message} />
    </>
  )
}
