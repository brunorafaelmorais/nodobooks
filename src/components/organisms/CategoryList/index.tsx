import { useCallback } from 'react'

import NavLink from '@/components/atoms/NavLink'

import { ICategory } from '@/interfaces'

import { useAppDispatch } from '@/store'
import { toggleCategoriesAside } from '@/store/ui'

import { Container } from './styles'

export type Props = {
  categories: ICategory[]
  activeCategoryId?: string
}

export default function CategoryList({
  activeCategoryId,
  categories
}: Props): JSX.Element {
  const dispatch = useAppDispatch()

  const closeCategoriesAside = useCallback(() => {
    if (window.matchMedia('(max-width: 992px)').matches) {
      dispatch(toggleCategoriesAside())
    }
  }, [dispatch])

  return (
    <Container>
      {categories.map(category => (
        <NavLink
          key={category.id}
          to={`/category/${category.id}`}
          text={category.name}
          isActive={activeCategoryId === String(category.id)}
          handleClick={closeCategoriesAside}
        />
      ))}
    </Container>
  )
}
