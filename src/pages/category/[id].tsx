import { useEffect, useState } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'

import MainLayout from '@/components/templates/MainLayout'
import { ContentBox } from '@/components/molecules/ContentBox/styles'
import SEO from '@/components/SEO'
import BookList from '@/components/organisms/BookList'
import CategoryList from '@/components/organisms/CategoryList'
import Typography from '@/components/atoms/Typography'

import { Container } from '@/styles/pages/Category.styles'

import { IBook } from '@/models/IBook'
import api from '@/services/api'
import { ICategory } from '@/models/ICategory'

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

  return (
    <MainLayout>
      <SEO title="Bookstore" />
      <Container>
        <ContentBox className="content-box">
          {router.isFallback ? (
            <Typography>Loading...</Typography>
          ) : (
            <>
              <div className="left">
                <CategoryList
                  activeCategoryId={activeCategoryId}
                  categories={categories}
                />
              </div>
              <div className="right">
                <BookList books={books} />
              </div>
            </>
          )}
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
    api.get<IBook[]>(`books?category_id=${id}`)
  ])

  return {
    props: {
      categories: categories.data,
      books: books.data
    },
    revalidate: 60
  }
}
