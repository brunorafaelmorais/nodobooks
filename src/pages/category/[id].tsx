import { useEffect, useState } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'

import MainLayout from '@/components/templates/MainLayout'
import FallbackLoading from '@/components/atoms/FallbackLoading'
import CategoriesAndBooksList from '@/components/organisms/CategoriesAndBooksList'
import Banner from '@/components/atoms/Banner'

import SEO from '@/components/SEO'

import { Container } from '@/styles/pages/Category.styles'

import { IBook, ICategory, IResponseList } from '@/interfaces'

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
        <Banner path="/banner.jpg" />
        <CategoriesAndBooksList
          activeCategoryId={activeCategoryId}
          categories={categories}
          books={books}
          className="category-and-books"
        />
      </Container>
    </MainLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await api.get<IResponseList<ICategory>>('categories')

  const categories = response.data.rows

  const paths = categories.map(category => ({
    params: { id: String(category.id) }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps<CategoryPageProps> = async ctx => {
  const { id } = ctx.params

  const [categories, books] = await Promise.all([
    api.get<IResponseList<ICategory>>('categories'),
    api.get<IResponseList<IBook>>(`books?category=${id}`)
  ])

  return {
    props: {
      categories: categories.data.rows,
      books: books.data.rows
    },
    revalidate: 60
  }
}
