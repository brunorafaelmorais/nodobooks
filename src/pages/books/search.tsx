import { GetServerSideProps } from 'next'

import SEO from '@/components/SEO'
import MainLayout from '@/components/templates/MainLayout'
import CategoriesAndBooksList from '@/components/organisms/CategoriesAndBooksList'
import Typography from '@/components/atoms/Typography'
import { ContentBox } from '@/components/molecules/ContentBox/styles'

import { Container } from '@/styles/pages/Search.styles'

import { IBook, ICategory, IResponseList } from '@/interfaces'

import api from '@/services/api'

type SearchPageProps = {
  categories: ICategory[]
  books: IBook[]
}

export default function SearchPage({
  categories,
  books
}: SearchPageProps): JSX.Element {
  return (
    <MainLayout>
      <SEO title="Search Results" />
      <Container>
        <ContentBox className="container-text-result">
          <Typography color="textGray">{books.length} book(s) found</Typography>
        </ContentBox>
        <CategoriesAndBooksList categories={categories} books={books} />
      </Container>
    </MainLayout>
  )
}

export const getServerSideProps: GetServerSideProps<SearchPageProps> = async ctx => {
  const { query } = ctx.query

  const [categories, books] = await Promise.all([
    api.get<IResponseList<ICategory>>('categories'),
    api.get<IResponseList<IBook>>(`books/search?query=${query}`)
  ])

  return {
    props: {
      categories: categories.data.rows,
      books: books.data.rows
    }
  }
}
