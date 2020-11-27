import NavLink from '@/components/atoms/NavLink'
import { ICategory } from '@/interfaces/ICategory'

import { Container } from './styles'

export type Props = {
  categories: ICategory[]
  activeCategoryId?: string
}

export default function CategoryList({
  activeCategoryId,
  categories
}: Props): JSX.Element {
  return (
    <Container>
      {categories.map(category => (
        <NavLink
          key={category.id}
          to={`/category/${category.id}`}
          text={category.name}
          isActive={activeCategoryId === String(category.id)}
        />
      ))}
    </Container>
  )
}
