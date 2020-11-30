import Link from 'next/link'
import { useTranslation } from 'react-i18next'

import Button from '@/components/atoms/Button'
import Typography from '@/components/atoms/Typography'
import { StarRating } from '@/components/atoms/StarRating'

import { IBook } from '@/interfaces'
import formatCurrency from '@/utils/formatCurrency'

import { Container } from './styles'

export type Props = {
  book: IBook
  handleBuy?: (book: IBook) => void
}

export default function BookCard({ book, handleBuy }: Props): JSX.Element {
  const { t } = useTranslation()

  return (
    <Container>
      <div className="image">
        <Link href={`/book/${book.id}`}>
          <a>
            <img src={book.cover} alt={book.title} />
          </a>
        </Link>
      </div>
      <div className="content">
        <Link href={`/book/${book.id}`}>
          <a>
            <Typography
              className="author"
              fontSize={10}
              color="textGray"
              fullWidth
            >
              {book.author}
            </Typography>
            <Typography
              className="book-title"
              fontSize={16}
              fontWeight={700}
              font="Montserrat"
              fullWidth
            >
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
              fullWidth
            >
              {formatCurrency(book.price)}
            </Typography>
          </a>
        </Link>

        <div>
          <Button
            onClick={() => handleBuy(book)}
            type="button"
            className="buy-now"
            color="primary"
            outlined
          >
            {t('buy_now')}
          </Button>
        </div>
      </div>
    </Container>
  )
}
