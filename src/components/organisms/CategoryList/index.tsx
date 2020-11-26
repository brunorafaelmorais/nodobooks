import NavLink from '@/components/atoms/NavLink'
import { ICategory } from '@/models/ICategory'

import { Container } from './styles'

export type Props = {
  categories: ICategory[]
}

export default function CategoryList({ categories }: Props): JSX.Element {
  return (
    <Container>
      {categories.map(category => (
        <NavLink key={category.id} to="#" text={category.name} />
      ))}
    </Container>
  )
}
