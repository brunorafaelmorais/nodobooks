import { ContentBox } from '@/components/molecules/ContentBox/styles'

import { IBook, ICategory } from '@/interfaces'
import BookList from '../BookList'
import CategoryList from '../CategoryList'

import { Container } from './styles'

type Props = {
  categories: ICategory[]
  books: IBook[]
  activeCategoryId?: string
  className?: string
}

export default function CategoriesAndBooksList({
  categories,
  books,
  activeCategoryId,
  className
}: Props): JSX.Element {
  return (
    <Container className={className}>
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
  )
}
