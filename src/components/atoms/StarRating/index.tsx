import { MdStar } from 'react-icons/md'
import { v4 as uuid } from 'uuid'

import calcPercentStarRating from '@/utils/calcPercentStarRating'

import Typography from '../Typography'

import { Container } from './styles'

type Props = {
  className?: string
  stars: number
  text?: string
}

export function StarRating({ className, stars, text }: Props): JSX.Element {
  return (
    <Container
      clipPathPercent={calcPercentStarRating(stars)}
      className={className}
    >
      <div className="star-container">
        <div className="star-box -color">
          {[...Array(5)].map(() => (
            <MdStar key={uuid()} size={16} />
          ))}
        </div>
        <div className="star-box -gray">
          {[...Array(5)].map(() => (
            <MdStar key={uuid()} size={16} />
          ))}
        </div>
      </div>
      {text && (
        <Typography className="text" fontSize={10} color="textGray">
          {text}
        </Typography>
      )}
    </Container>
  )
}
