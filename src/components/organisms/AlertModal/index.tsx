import { useEffect, useRef } from 'react'

import Typography from '@/components/atoms/Typography'

import { IAlertMessage } from '@/interfaces'

import Modal, { ModalHandles } from '../Modal'

import { Container, MessageBox } from './styles'
import { useTypedSelector } from '@/store/rootReducer'
import { useAppDispatch } from '@/store'
import { setAlertModalIsOpen } from '@/store/alert'

type Props = {
  message: IAlertMessage
}

const icons = {
  success: <img src="/ico_success.svg" alt="success icon" />,
  error: <img src="/ico_error.svg" alt="error icon" />
}

export default function AlertModal({ message }: Props): JSX.Element {
  const modalRef = useRef<ModalHandles>(null)

  const dispatch = useAppDispatch()

  const { alertModalIsOpen } = useTypedSelector(state => state.alert)

  useEffect(() => {
    if (alertModalIsOpen) {
      modalRef.current?.openModal()
    }

    return () => {
      dispatch(setAlertModalIsOpen(false))
    }
  }, [alertModalIsOpen, dispatch])

  return (
    <Modal ref={modalRef} showCloseButton title={message.title} zIndex={21}>
      <Container>
        <MessageBox>
          <div className="icon">{icons[message.type]}</div>
          <Typography className="text" fontWeight={600} fontSize={24}>
            {message.text}
          </Typography>
        </MessageBox>
      </Container>
    </Modal>
  )
}
