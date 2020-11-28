import Button from '@/components/atoms/Button'
import { StarRating } from '@/components/atoms/StarRating'
import Typography from '@/components/atoms/Typography'

import { IBook } from '@/interfaces'

import formatCurrency from '@/utils/formatCurrency'

import { Container } from './styles'

type Props = {
  book: IBook
  handleBuy(): void
}

export default function BookDetailCard({
  book,
  handleBuy
}: Props): JSX.Element {
  return (
    <Container>
      <div className="image">
        <img src={book.cover} alt={book.title} />
      </div>
      <div className="content">
        <Typography className="author" fontSize={12} color="textGray" fullWidth>
          {book.author}
        </Typography>
        <Typography
          className="book-title"
          fontSize={24}
          fontWeight={700}
          font="Montserrat"
        >
          {book.title}
        </Typography>
        <StarRating
          stars={book.stars}
          text={`${book.reviews} review`}
          iconSize={24}
          className="rating"
        />
        <Typography
          className="price"
          fontSize={18}
          fontWeight={700}
          font="Montserrat"
        >
          {formatCurrency(book.price)}
        </Typography>
        <div className="container-button-buy">
          <Button onClick={handleBuy} type="button" color="primary" outlined>
            Buy now
          </Button>
        </div>
        <Typography
          className="book-description"
          fontSize={14}
          color="textGray"
          fullWidth
        >
          {book.description}
        </Typography>
      </div>
    </Container>
  )
}
