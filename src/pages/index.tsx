import Banner from '@/atoms/Banner'
import { ContentBox } from '@/molecules/ContentBox/styles'

import SEO from '@/settings/SEO'

import MainLayout from '@/templates/MainLayout'

import { Container } from '@/styles/pages/Home.styles'
import NavLink from '@/atoms/NavLink'

export default function Home(): JSX.Element {
  return (
    <MainLayout>
      <SEO title="Bookstore" />
      <Container>
        <Banner path="/banner.jpg" />
        <div className="container-list">
          <ContentBox className="content-box">
            <div className="left">
              <NavLink to="/" text="All Categories" />
              <NavLink isActive to="/" text="Bestsellers" />
              <NavLink to="/" text="Art & Fashion" />
              <NavLink to="/" text="Biography" />
              <NavLink to="/" text="Business" />
            </div>
            <div className="right">
              <span>right</span>
            </div>
          </ContentBox>
        </div>
      </Container>
    </MainLayout>
  )
}
