import { GetStaticProps } from 'next'

import Banner from '@/components/atoms/Banner'
import { ContentBox } from '@/components/molecules/ContentBox/styles'
import BookList from '@/components/organisms/BookList'
import MainLayout from '@/components/templates/MainLayout'
import CategoryList from '@/components/organisms/CategoryList'

import SEO from '@/components/SEO'

import { Container } from '@/styles/pages/Home.styles'

import { IBook } from '@/interfaces/IBook'
import { ICategory } from '@/interfaces/ICategory'

import api from '@/services/api'

type HomeProps = {
  categories: ICategory[]
  books: IBook[]
}

export default function Home({ categories, books }: HomeProps): JSX.Element {
  return (
    <MainLayout>
      <SEO title="Bookstore" />
      <Container>
        <Banner path="/banner.jpg" />
        <ContentBox className="content-box">
          <div className="left">
            <CategoryList categories={categories} />
          </div>
          <div className="right">
            <BookList books={books} />
          </div>
        </ContentBox>
      </Container>
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const [categories, books] = await Promise.all([
    api.get<ICategory[]>('categories'),
    api.get<IBook[]>('books')
  ])

  return {
    props: {
      categories: categories.data,
      books: books.data
    },
    revalidate: 10
  }
}
