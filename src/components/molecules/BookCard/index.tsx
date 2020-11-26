import Button from '@/components/atoms/Button'
import Typography from '@/components/atoms/Typography'

import { IBook } from '@/models/IBook'

import { Container } from './styles'

export type Props = {
  book: IBook
}

export default function BookCard({ book }: Props): JSX.Element {
  return (
    <Container>
      <div className="image">
        <img src={book.image} alt={book.name} />
      </div>
      <div className="content">
        <Typography className="author" fontSize={10} color="textGray" fullWidth>
          {book.author}
        </Typography>
        <Typography fontSize={16} fontWeight={700} font="Montserrat">
          {book.name}
        </Typography>
        <Typography
          className="description"
          fontSize={10}
          color="textGray"
          fullWidth
        >
          {book.description}
        </Typography>
        <Typography
          className="price"
          fontSize={13}
          fontWeight={700}
          font="Montserrat"
        >
          ${book.price}
        </Typography>
        <Button className="buy-now" color="primary" outlined>
          Buy now
        </Button>
      </div>
    </Container>
  )
}
