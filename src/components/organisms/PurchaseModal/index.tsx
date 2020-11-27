import { useCallback, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import BookCardResume from '@/components/molecules/BookCardResume'
import Button from '@/components/atoms/Button'
import Input from '@/components/Input'

import { IBook } from '@/interfaces/IBook'

import { useTypedSelector } from '@/store/rootReducer'
import { useAppDispatch } from '@/store'
import { setPurchaseModalIsOpen } from '@/store/books'

import Modal, { ModalHandles } from '../Modal'

import { ContainerButtons, FormContainer } from './styles'

type Props = {
  book: IBook
}

type FormData = {
  name: string
  email: string
  phone: number
}

const schema = yup.object().shape({
  name: yup.string().required().min(2),
  email: yup.string().required().email(),
  phone: yup.string().required()
})

export default function PurchaseModal({ book }: Props): JSX.Element {
  const { register, handleSubmit, errors } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  const modalRef = useRef<ModalHandles>(null)

  const { purchaseModalIsOpen } = useTypedSelector(state => state.books)
  const dispatch = useAppDispatch()

  const onSubmit = useCallback((formData: FormData) => {
    console.log(formData)
  }, [])

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

      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Name"
          fieldName="name"
          type="text"
          placeholder="Type your name here"
          ref={register}
          hasError={!!errors.name}
          error={errors.name?.message}
        />
        <Input
          label="E-mail"
          fieldName="email"
          type="email"
          placeholder="Type your e-mail here"
          ref={register}
          hasError={!!errors.email}
          error={errors.email?.message}
        />
        <Input
          label="Phone"
          fieldName="phone"
          type="tel"
          placeholder="Type your phone here"
          ref={register}
          hasError={!!errors.phone}
          error={errors.phone?.message}
        />

        <ContainerButtons>
          <Button
            onClick={handleCloseModal}
            type="button"
            outlined
            color="gray"
          >
            Cancel
          </Button>
          <Button type="submit">Send</Button>
        </ContainerButtons>
      </FormContainer>
    </Modal>
  )
}
