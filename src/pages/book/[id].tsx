import { useCallback } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'

import BookDetailCard from '@/components/molecules/BookDetailCard'
import { ContentBox } from '@/components/molecules/ContentBox/styles'
import CategoryList from '@/components/organisms/CategoryList'
import MainLayout from '@/components/templates/MainLayout'
import FallbackLoading from '@/components/atoms/FallbackLoading'
import PurchaseModal from '@/components/organisms/PurchaseModal'

import SEO from '@/components/SEO'

import { IBook, ICategory, IResponseList } from '@/interfaces'

import api from '@/services/api'

import { Container } from '@/styles/pages/BookDetail.styles'

import { useAppDispatch } from '@/store'
import { setPurchaseModalIsOpen } from '@/store/ui'
import { useTypedSelector } from '@/store/rootReducer'

type BookDetailProps = {
  book: IBook
  categories: ICategory[]
}

export default function BookDetail({
  book,
  categories
}: BookDetailProps): JSX.Element {
  const router = useRouter()

  const { categoriesAsideIsOpen } = useTypedSelector(state => state.ui)

  const dispatch = useAppDispatch()

  const handleBuy = useCallback(() => {
    dispatch(setPurchaseModalIsOpen(true))
  }, [dispatch])

  if (router.isFallback) {
    return <FallbackLoading text="Loading..." />
  }

  return (
    <>
      <MainLayout>
        <SEO
          title={book.title}
          image={book.cover}
          description={book.description}
        />
        <Container>
          <ContentBox className="content-box">
            <div className={`left ${categoriesAsideIsOpen ? 'show' : ''}`}>
              <CategoryList
                activeCategoryId={String(book.category)}
                categories={categories}
              />
            </div>
            <div className="right">
              <BookDetailCard handleBuy={handleBuy} book={book} />
            </div>
          </ContentBox>
        </Container>
      </MainLayout>
      <PurchaseModal book={book} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await api.get<IResponseList<IBook>>('books')

  const books = response.data.rows

  const paths = books.map(book => ({
    params: { id: String(book.id) }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps<BookDetailProps> = async ctx => {
  const { id } = ctx.params

  const [categories, book] = await Promise.all([
    api.get<IResponseList<ICategory>>('categories'),
    api.get<{ book: IBook }>(`books/${id}`)
  ])

  return {
    props: {
      categories: categories.data.rows,
      book: book.data.book
    },
    revalidate: 1
  }
}
