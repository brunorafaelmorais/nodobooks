import { IBook } from '@/models/IBook'

import BookCard from '@/components/molecules/BookCard'

import { Container } from './styles'

export type Props = {
  books: IBook[]
}

export default function BookList({ books }: Props): JSX.Element {
  return (
    <Container>
      {books.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </Container>
  )
}
