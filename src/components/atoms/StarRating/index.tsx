import { MdStar } from 'react-icons/md'
import { v4 as uuid } from 'uuid'

import calcPercentStarRating from '@/utils/calcPercentStarRating'

import Typography from '../Typography'

import { Container } from './styles'

type Props = {
  className?: string
  stars: number
  text?: string
  iconSize?: number
}

export function StarRating({
  className,
  stars,
  text,
  iconSize = 16
}: Props): JSX.Element {
  return (
    <Container
      clipPathPercent={calcPercentStarRating(stars)}
      iconSize={iconSize}
      className={className}
    >
      <div className="star-container">
        <div className="star-box -color">
          {[...Array(5)].map(() => (
            <MdStar key={uuid()} size={iconSize} />
          ))}
        </div>
        <div className="star-box -gray">
          {[...Array(5)].map(() => (
            <MdStar key={uuid()} size={iconSize} />
          ))}
        </div>
      </div>
      {text && (
        <Typography
          className="text"
          fontSize={10}
          fontWeight={700}
          color="textGray"
        >
          {text}
        </Typography>
      )}
    </Container>
  )
}
