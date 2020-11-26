import Banner from '@/atoms/Banner'

import SEO from '@/settings/SEO'

import MainLayout from '@/templates/MainLayout'

export default function Home(): JSX.Element {
  return (
    <MainLayout>
      <SEO title="Bookstore" />
      <Banner path="/banner.jpg" />
    </MainLayout>
  )
}
