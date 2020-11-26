import { useState } from 'react'

import Banner from '@/components/atoms/Banner'
import { ContentBox } from '@/components/molecules/ContentBox/styles'
import BookList from '@/components/organisms/BookList'
import MainLayout from '@/components/templates/MainLayout'
import CategoryList from '@/components/organisms/CategoryList'

import SEO from '@/components/SEO'

import { Container } from '@/styles/pages/Home.styles'

import { IBook } from '@/models/IBook'
import { ICategory } from '@/models/ICategory'

export default function Home(): JSX.Element {
  const [categories] = useState<ICategory[]>([
    { id: 1, name: 'Bestsellers' },
    { id: 2, name: 'Business' },
    { id: 3, name: 'Education' },
    { id: 4, name: 'Health & Wellbeing' }
  ])
  const [books] = useState<IBook[]>([
    {
      id: 1,
      author: 'Kevin Kwan',
      name: 'Crazy rich asians',
      description:
        'the outrageously funny debut novel about three super-rich, pedigreed Chinese families and the gossip...',
      image: '/book.jpg',
      price: 4.99
    },
    {
      id: 2,
      author: 'Kevin Kwan',
      name: 'Crazy rich asians',
      description:
        'the outrageously funny debut novel about three super-rich, pedigreed Chinese families and the gossip...',
      image: '/book.jpg',
      price: 4.99
    },
    {
      id: 3,
      author: 'Kevin Kwan',
      name: 'Crazy rich asians',
      description:
        'the outrageously funny debut novel about three super-rich, pedigreed Chinese families and the gossip...',
      image: '/book.jpg',
      price: 4.99
    },
    {
      id: 4,
      author: 'Kevin Kwan',
      name: 'Crazy rich asians',
      description:
        'the outrageously funny debut novel about three super-rich, pedigreed Chinese families and the gossip...',
      image: '/book.jpg',
      price: 4.99
    }
  ])

  return (
    <MainLayout>
      <SEO title="Bookstore" />
      <Container>
        <Banner path="/banner.jpg" />
        <div className="container-list">
          <ContentBox className="content-box">
            <div className="left">
              <CategoryList categories={categories} />
            </div>
            <div className="right">
              <BookList books={books} />
            </div>
          </ContentBox>
        </div>
      </Container>
    </MainLayout>
  )
}
