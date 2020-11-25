import { Container } from './styles'

import { TypoBody1 } from '@/atoms/Typography'
import { ContentBox } from '@/molecules/ContentBox/styles'

export default function Footer(): JSX.Element {
  return (
    <Container>
      <ContentBox>
        <div className="divider" />
        <TypoBody1 fullWidth center color="textBlack">
          © 2020 - Nodo Bookstore and individual contributors. Content is
          available under these licenses.
        </TypoBody1>
      </ContentBox>
    </Container>
  )
}
