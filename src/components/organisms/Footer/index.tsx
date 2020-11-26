import { Container } from './styles'

import Typography from '@/components/atoms/Typography'
import { ContentBox } from '@/components/molecules/ContentBox/styles'

export default function Footer(): JSX.Element {
  return (
    <Container>
      <ContentBox>
        <div className="divider" />
        <Typography
          fullWidth
          align="center"
          fontSize={14}
          font="Montserrat"
          fontWeight={500}
        >
          © 2020 - Nodo Bookstore and individual contributors. Content is
          available under these licenses.
        </Typography>
      </ContentBox>
    </Container>
  )
}
