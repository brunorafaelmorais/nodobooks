import {
  forwardRef,
  useCallback,
  useState,
  useImperativeHandle,
  ReactNode
} from 'react'

import Typography from '@/components/atoms/Typography'

import {
  Box,
  Container,
  Overlay,
  Content,
  ContainerCloseButton
} from './styles'
import Button from '@/components/atoms/Button'
import useKeypress from '@/hooks/useKeypress'

export type ModalHandles = {
  openModal(): void
  closeModal(): void
}

type Props = {
  title?: string
  showCloseButton?: boolean
  children: ReactNode
}

const Modal: React.ForwardRefRenderFunction<ModalHandles, Props> = (
  { title, showCloseButton = false, children },
  ref
) => {
  const [visible, setVisible] = useState(false)

  useKeypress('Escape', () => {
    setVisible(false)
  })

  const openModal = useCallback(() => {
    setVisible(true)
  }, [])

  const closeModal = useCallback(() => {
    setVisible(false)
  }, [])

  useImperativeHandle(ref, () => ({
    openModal,
    closeModal
  }))

  if (!visible) return null

  return (
    <Container>
      <Overlay onClick={closeModal} />
      <Box>
        {title && (
          <Typography
            className="title"
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