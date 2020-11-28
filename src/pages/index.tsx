import { GetStaticProps } from 'next'

import Banner from '@/components/atoms/Banner'
import MainLayout from '@/components/templates/MainLayout'
import CategoriesAndBooksList from '@/components/organisms/CategoriesAndBooksList'

import SEO from '@/components/SEO'

import { Container } from '@/styles/pages/Home.styles'

import { IBook, ICategory, IResponseList } from '@/interfaces'

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
        <CategoriesAndBooksList categories={categories} books={books} />
      </Container>
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const [categories, books] = await Promise.all([
    api.get<IResponseList<ICategory>>('categories'),
    api.get<IResponseList<IBook>>('books')
  ])

  return {
    props: {
      categories: categories.data.rows,
      books: books.data.rows
    },
    revalidate: 10
  }
}
