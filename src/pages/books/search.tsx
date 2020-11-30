import { GetServerSideProps } from 'next'

import SEO from '@/components/SEO'
import MainLayout from '@/components/templates/MainLayout'
import CategoriesAndBooksList from '@/components/organisms/CategoriesAndBooksList'

import { Container } from '@/styles/pages/Search.styles'

import { IBook, ICategory, IResponseList } from '@/interfaces'

import api from '@/services/api'
import { useTranslation } from 'react-i18next'

type SearchPageProps = {
  categories: ICategory[]
  books: IBook[]
}

export default function SearchPage({
  categories,
  books
}: SearchPageProps): JSX.Element {
  const { t } = useTranslation()

  return (
    <MainLayout>
      <SEO title={t('search_page')} />
      <Container>
        <CategoriesAndBooksList categories={categories} books={books} />
      </Container>
    </MainLayout>
  )
}

export const getServerSideProps: GetServerSideProps<SearchPageProps> = async ctx => {
  const { value } = ctx.query

  const [categories, books] = await Promise.all([
    api.get<IResponseList<ICategory>>('categories'),
    api.get<IResponseList<IBook>>(`books/search?query=${value}`)
  ])

  return {
    props: {
      categories: categories.data.rows,
      books: books.data.rows
    }
  }
}
