import Dotdotdot from 'react-dotdotdot'

import Button from '@/components/atoms/Button'
import Typography from '@/components/atoms/Typography'

import { IBook } from '@/models/IBook'
import formatCurrency from '@/utils/formatCurrency'

import { Container } from './styles'

export type Props = {
  book: IBook
}

export default function BookCard({ book }: Props): JSX.Element {
  return (
    <Container>
      <div className="image">
        <img src={book.cover} alt={book.title} />
      </div>
      <div className="content">
        <Typography className="author" fontSize={10} color="textGray" fullWidth>
          {book.author}
        </Typography>
        <Typography fontSize={16} fontWeight={700} font="Montserrat">
          {book.title}
        </Typography>
        <Dotdotdot clamp={4}>
          <Typography
            className="description"
            fontSize={10}
            color="textGray"
            fullWidth
          >
            {book.description}
          </Typography>
        </Dotdotdot>
        <Typography
          className="price"
          fontSize={13}
          fontWeight={700}
          font="Montserrat"
        >
          {formatCurrency(book.price)}
        </Typography>
        <Button type="button" className="buy-now" color="primary" outlined>
          Buy now
        </Button>
      </div>
    </Container>
  )
}
