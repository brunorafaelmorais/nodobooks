import { useCallback, useState } from 'react'

import BookCard from '@/components/molecules/BookCard'

import { IBook } from '@/interfaces'

import { useAppDispatch } from '@/store'
import { setPurchaseModalIsOpen } from '@/store/ui'

import { Container } from './styles'
import PurchaseModal from '../PurchaseModal'

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
    <>
      <Container>
        {books.map(book => (
          <BookCard handleBuy={handleBuy} key={book.id} book={book} />
        ))}
      </Container>
      <PurchaseModal book={book} />
    </>
  )
}
