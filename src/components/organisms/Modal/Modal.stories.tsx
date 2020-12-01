/* eslint-disable react-hooks/rules-of-hooks */
import { Meta } from '@storybook/react/types-6-0'
import { useCallback, useRef } from 'react'

import Button from '@/components/atoms/Button'
import Modal, { ModalHandles, Props } from '.'

export default {
  title: 'Organisms',
  component: Modal
} as Meta

export const modal: React.FC<Props> = () => {
  const modalRef = useRef<ModalHandles>(null)

  const openModal = useCallback(() => {
    modalRef.current?.openModal()
  }, [])

  return (
    <>
      <Button onClick={openModal}>Open modal</Button>
      <Modal ref={modalRef} showCloseButton title="Title modal">
        <span>content here</span>
      </Modal>
    </>
  )
}
