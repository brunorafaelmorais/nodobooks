import { Meta } from '@storybook/react/types-6-0'
import { withNextRouter } from 'storybook-addon-next-router'

import BookList, { Props } from '.'

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
  component: BookList,
  decorators: [withNextRouter]
} as Meta

export const bookList: React.FC<Props> = () => <BookList books={BOOKS} />
