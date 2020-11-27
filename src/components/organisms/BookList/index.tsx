import { useCallback, useState } from 'react'

import BookCard from '@/components/molecules/BookCard'

import { IBook } from '@/interfaces/IBook'

import { useAppDispatch } from '@/store'

import { Container } from './styles'
import PurchaseModal from '../PurchaseModal'
import { setPurchaseModalIsOpen } from '@/store/books'

export type Props = {
  books: IBook[]
}

export default function BookList({ books }: Props): JSX.Element {
  const [book, setBook] = useState<IBook>({} as IBook)
  const dispatch = useAppDispatch()

  const handleBuy = useCallback(
    (book: IBook) => {
      setBook(book)
      dispatch(setPurchaseModalIsOpen(true))
    },
    [dispatch]
  )

  return (
    <Container>
      {books.map(book => (
        <BookCard handleBuy={handleBuy} key={book.id} book={book} />
      ))}

      <PurchaseModal book={book} />
    </Container>
  )
}
