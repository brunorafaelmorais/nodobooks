import Typography from '@/components/atoms/Typography'
import StarRating from '@/components/atoms/StarRating'

import { IBook } from '@/interfaces'

import formatCurrency from '@/utils/formatCurrency'

import { Container } from './styles'

export type Props = {
  book: IBook
  className?: string
}

export default function BookCardResume({
  book,
  className
}: Props): JSX.Element {
  return (
    <Container className={className}>
      <img src={book.cover} alt={book.title} />
      <div className="content">
        <Typography className="author" fontSize={10} color="textGray" fullWidth>
          {book.author}
        </Typography>
        <Typography fontSize={16} fontWeight={700} font="Montserrat" fullWidth>
          {book.title}
        </Typography>
        <StarRating
          stars={book.stars}
          text={`${book.reviews} review`}
          className="rating"
        />
        <Typography
          className="book-description"
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
          {formatCurrency(book.price)}
        </Typography>
      </div>
    </Container>
  )
}
