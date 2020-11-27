import { useEffect, useState } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'

import MainLayout from '@/components/templates/MainLayout'
import { ContentBox } from '@/components/molecules/ContentBox/styles'
import SEO from '@/components/SEO'
import BookList from '@/components/organisms/BookList'
import CategoryList from '@/components/organisms/CategoryList'
import FallbackLoading from '@/components/atoms/FallbackLoading'

import { Container } from '@/styles/pages/Category.styles'

import { IBook } from '@/interfaces/IBook'
import { ICategory } from '@/interfaces/ICategory'
import api from '@/services/api'

type CategoryPageProps = {
  categories: ICategory[]
  books: IBook[]
}

export default function CategoryPage({
  categories,
  books
}: CategoryPageProps): JSX.Element {
  const [activeCategoryId, setActiveCategoryId] = useState('')

  const router = useRouter()

  const { id } = router.query

  useEffect(() => {
    setActiveCategoryId(id as string)
  }, [id])

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
              activeCategoryId={activeCategoryId}
              categories={categories}
            />
          </div>
          <div className="right">
            <BookList books={books} />
          </div>
        </ContentBox>
      </Container>
    </MainLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await api.get<ICategory[]>('categories')

  const categories = response.data

  const paths = categories.map(category => ({
    params: { id: String(category.id) }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps<CategoryPageProps> = async ctx => {
  const { id } = ctx.params

  const [categories, books] = await Promise.all([
    api.get<ICategory[]>('categories'),
    api.get<IBook[]>(`books?category=${id}`)
  ])

  return {
    props: {
      categories: categories.data,
      books: books.data
    },
    revalidate: 60
  }
}
