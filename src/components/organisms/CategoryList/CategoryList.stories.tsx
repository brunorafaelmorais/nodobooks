import { Meta } from '@storybook/react/types-6-0'
import { withNextRouter } from 'storybook-addon-next-router'

import CategoryList, { Props } from '.'

const CATEGORIES = [
  {
    id: 1,
    name: 'Bestsellers'
  },
  {
    id: 2,
    name: 'Art & Fashion'
  },
  {
    id: 3,
    name: 'Biography'
  },
  {
    id: 4,
    name: 'Business'
  },
  {
    id: 5,
    name: "Children's"
  },
  {
    id: 6,
    name: 'Education'
  },
  {
    id: 7,
    name: 'Fiction & Poetry'
  },
  {
    id: 8,
    name: 'Film, TV & Drama'
  },
  {
    id: 9,
    name: 'Food & Drink'
  },
  {
    id: 10,
    name: 'Health & Wellbeing'
  }
]

export default {
  title: 'Organisms',
  component: CategoryList,
  decorators: [withNextRouter]
} as Meta

export const categoryList: React.FC<Props> = () => (
  <CategoryList activeCategoryId="2" categories={CATEGORIES} />
)
