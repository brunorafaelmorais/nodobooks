import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'

import BookDetailCard from '@/components/molecules/BookDetailCard'
import { ContentBox } from '@/components/molecules/ContentBox/styles'
import CategoryList from '@/components/organisms/CategoryList'
import MainLayout from '@/components/templates/MainLayout'
import FallbackLoading from '@/components/atoms/FallbackLoading'
import SEO from '@/components/SEO'

import { IBook } from '@/interfaces/IBook'
import { ICategory } from '@/interfaces/ICategory'

import api from '@/services/api'

import { Container } from '@/styles/pages/BookDetail.styles'

type BookDetailProps = {
  book: IBook
  categories: ICategory[]
}

export default function BookDetail({
  book,
  categories
}: BookDetailProps): JSX.Element {
  const router = useRouter()

  if (router.isFallback) {
    return <FallbackLoading text="Loading..." />
  }

  return (
    <MainLayout>
      <SEO title="Bookstore" />
      <Container>
        <ContentBox className="content-box">
          <div className="left">
            <CategoryList
              activeCategoryId={String(book.category)}
              categories={categories}
            />
          </div>
          <div className="right">
            <BookDetailCard book={book} />
          </div>
        </ContentBox>
      </Container>
    </MainLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await api.get<IBook[]>('books')

  const books = response.data

  const paths = books.map(book => ({
    params: { id: String(book.id) }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps<BookDetailProps> = async ctx => {
  const { id } = ctx.params

  const [categories, book] = await Promise.all([
    api.get<ICategory[]>('categories'),
    api.get<IBook>(`books/${id}`)
  ])

  return {
    props: {
      categories: categories.data,
      book: book.data
    },
    revalidate: 60
  }
}
