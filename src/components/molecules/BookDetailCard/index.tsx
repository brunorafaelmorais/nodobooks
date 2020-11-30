import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()

  return (
    <Container>
      <div className="info-mobile">
        <Typography className="author" fontSize={12} color="textGray" fullWidth>
          {book.author}
        </Typography>
        <Typography fontSize={24} fontWeight={700} font="Montserrat" fullWidth>
          {book.title}
        </Typography>
        <StarRating
          stars={book.stars}
          text={`${book.reviews} review`}
          iconSize={24}
          className="rating"
        />
      </div>
      <div className="image">
        <img src={book.cover} alt={book.title} />
      </div>
      <div className="content">
        <div className="info-desktop">
          <Typography
            className="author"
            fontSize={12}
            color="textGray"
            fullWidth
          >
            {book.author}
          </Typography>
          <Typography
            fontSize={24}
            fontWeight={700}
            font="Montserrat"
            fullWidth
          >
            {book.title}
          </Typography>
          <StarRating
            stars={book.stars}
            text={`${book.reviews} review`}
            iconSize={24}
            className="rating"
          />
        </div>
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
            {t('buy_now')}
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
