import Banner from '@/atoms/Banner'
import Button from '@/atoms/Button'

import SEO from '@/settings/SEO'

import MainLayout from '@/templates/MainLayout'

export default function Home(): JSX.Element {
  return (
    <MainLayout>
      <SEO title="Bookstore" />
      <Banner path="/banner.jpg" />

      <Button color="primary">Primary</Button>
      <Button color="gray">Gray</Button>
      <Button color="primary" outlined>
        Primary outlined
      </Button>
      <Button color="gray" outlined>
        Gray outlined
      </Button>
    </MainLayout>
  )
}
