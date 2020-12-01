import { Meta } from '@storybook/react/types-6-0'

import StarRating, { Props } from '.'

export default {
  title: 'Atoms/Rating',
  component: StarRating
} as Meta

export const starRating: React.FC<Props> = () => (
  <StarRating stars={7} text="254 review" />
)

export const starRatingCustomSize: React.FC<Props> = () => (
  <StarRating stars={7} text="254 review" iconSize={24} />
)
