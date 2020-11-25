import { ReactNode } from 'react'

import Footer from '@/organisms/Footer'

type Props = {
  children: ReactNode
}

export default function MainLayout({ children }: Props): JSX.Element {
  return (
    <main>
      <div>{children}</div>
      <Footer />
    </main>
  )
}
