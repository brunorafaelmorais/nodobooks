import {
  forwardRef,
  useCallback,
  useState,
  useImperativeHandle,
  ReactNode
} from 'react'

import useKeypress from '@/hooks/useKeypress'

import Typography from '@/components/atoms/Typography'
import Button from '@/components/atoms/Button'

import {
  Box,
  Container,
  Overlay,
  Content,
  ContainerCloseButton
} from './styles'

export type ModalHandles = {
  openModal(): void
  closeModal(): void
}

type Props = {
  title?: string
  showCloseButton?: boolean
  zIndex?: number
  children: ReactNode
}

const Modal: React.ForwardRefRenderFunction<ModalHandles, Props> = (
  { title, showCloseButton = false, zIndex, children },
  ref
) => {
  const [visible, setVisible] = useState(false)

  useKeypress('Escape', () => {
    setVisible(false)
    document.body.style.overflowY = 'auto'
  })

  const openModal = useCallback(() => {
    setVisible(true)
    document.body.style.overflowY = 'hidden'
  }, [])

  const closeModal = useCallback(() => {
    setVisible(false)
    document.body.style.overflowY = 'auto'
  }, [])

  useImperativeHandle(ref, () => ({
    openModal,
    closeModal
  }))

  if (!visible) return null

  return (
    <Container zIndex={zIndex}>
      <Overlay onClick={closeModal} />
      <Box>
        {title && (
          <Typography
            className="modal-title"
            fontSize={24}
            fontWeight={700}
            font="Montserrat"
          >
            {title}
          </Typography>
        )}
        <Content>{children}</Content>
        {showCloseButton && (
          <ContainerCloseButton>
            <Button onClick={closeModal}>Close</Button>
          </ContainerCloseButton>
        )}
      </Box>
    </Container>
  )
}

export default forwardRef(Modal)
