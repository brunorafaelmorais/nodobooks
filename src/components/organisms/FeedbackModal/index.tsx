import { useEffect, useRef } from 'react'

import Typography from '@/components/atoms/Typography'

import { IFeedbackMessage } from '@/interfaces'

import Modal, { ModalHandles } from '../Modal'

import { Container, MessageBox } from './styles'
import { useTypedSelector } from '@/store/rootReducer'
import { useAppDispatch } from '@/store'
import { setFeedbackModalIsOpen } from '@/store/feedback'

type Props = {
  message: IFeedbackMessage
}

const icons = {
  success: <img src="/ico_success.svg" alt="success icon" />,
  error: <img src="/ico_error.svg" alt="error icon" />
}

export default function FeedbackModal({ message }: Props): JSX.Element {
  const modalRef = useRef<ModalHandles>(null)

  const dispatch = useAppDispatch()

  const { feedbackModalIsOpen } = useTypedSelector(state => state.feedback)

  useEffect(() => {
    if (feedbackModalIsOpen) {
      modalRef.current?.openModal()
    }

    return () => {
      dispatch(setFeedbackModalIsOpen(false))
    }
  }, [feedbackModalIsOpen, dispatch])

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
