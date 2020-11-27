import { useCallback, useEffect, useRef } from 'react'

import BookCardResume from '@/components/molecules/BookCardResume'
import Button from '@/components/atoms/Button'

import { IBook } from '@/interfaces/IBook'

import { useTypedSelector } from '@/store/rootReducer'
import { useAppDispatch } from '@/store'
import { setPurchaseModalIsOpen } from '@/store/books'

import Modal, { ModalHandles } from '../Modal'

import { ContainerButtons } from './styles'

type Props = {
  book: IBook
}

export default function PurchaseModal({ book }: Props): JSX.Element {
  const modalRef = useRef<ModalHandles>(null)

  const { purchaseModalIsOpen } = useTypedSelector(state => state.books)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (purchaseModalIsOpen) {
      modalRef.current?.openModal()
    }

    return () => {
      dispatch(setPurchaseModalIsOpen(false))
    }
  }, [purchaseModalIsOpen, dispatch])

  const handleCloseModal = useCallback(() => {
    modalRef.current?.closeModal()
  }, [])

  return (
    <Modal ref={modalRef} title="Buy now">
      <BookCardResume book={book} />

      <ContainerButtons>
        <Button onClick={handleCloseModal} type="button" outlined color="gray">
          Cancel
        </Button>
        <Button type="button">Send</Button>
      </ContainerButtons>
    </Modal>
  )
}
