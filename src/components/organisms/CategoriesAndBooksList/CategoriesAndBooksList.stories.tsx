import { Meta } from '@storybook/react/types-6-0'
import { withNextRouter } from 'storybook-addon-next-router'

import CategoriesAndBooksList, { Props } from '.'

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

const BOOKS = [
  {
    id: 1,
    price: 4405,
    cover: 'https://picsum.photos/212/300',
    author: 'Joseph Cotton',
    title: 'eiusmod quis nisi magna magna',
    description:
      'Aute in ipsum mollit deserunt. Velit nisi culpa proident exercitation sint ipsum mollit culpa cillum sint est anim ad dolore. Consequat non aute veniam proident deserunt sunt deserunt reprehenderit. Velit culpa amet deserunt proident proident officia veniam id deserunt fugiat. Non esse Lorem laborum commodo culpa mollit deserunt cupidatat minim ad duis duis voluptate. Ipsum consequat commodo Lorem aute nostrud in exercitation nulla ut qui voluptate proident nulla.',
    reviews: 297,
    stars: 6,
    category: 7
  },
  {
    id: 2,
    price: 4405,
    cover: 'https://picsum.photos/212/300',
    author: 'Joseph Cotton',
    title: 'eiusmod quis nisi magna magna',
    description:
      'Aute in ipsum mollit deserunt. Velit nisi culpa proident exercitation sint ipsum mollit culpa cillum sint est anim ad dolore. Consequat non aute veniam proident deserunt sunt deserunt reprehenderit. Velit culpa amet deserunt proident proident officia veniam id deserunt fugiat. Non esse Lorem laborum commodo culpa mollit deserunt cupidatat minim ad duis duis voluptate. Ipsum consequat commodo Lorem aute nostrud in exercitation nulla ut qui voluptate proident nulla.',
    reviews: 297,
    stars: 6,
    category: 7
  }
]

export default {
  title: 'Organisms',
  component: CategoriesAndBooksList,
  decorators: [withNextRouter]
} as Meta

export const categoriesAndBooks: React.FC<Props> = () => (
  <CategoriesAndBooksList
    activeCategoryId="2"
    categories={CATEGORIES}
    books={BOOKS}
  />
)
