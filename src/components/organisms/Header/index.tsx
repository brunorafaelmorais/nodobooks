import { useCallback, useState, KeyboardEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FiMenu, FiX } from 'react-icons/fi'

import Logo from '@/components/atoms/Logo'
import Typography from '@/components/atoms/Typography'
import { ContentBox } from '@/components/molecules/ContentBox/styles'
import InputSearch from '@/components/atoms/InputSearch'
import { BurguerMenu } from '@/components/atoms/BurguerMenu/styles'

import { useAppDispatch } from '@/store'

import { Container } from './styles'
import { toggleCategoriesAside } from '@/store/ui'
import { useTypedSelector } from '@/store/rootReducer'

export default function Header(): JSX.Element {
  const [value, setValue] = useState('')

  const { categoriesAsideIsOpen } = useTypedSelector(state => state.ui)

  const dispatch = useAppDispatch()

  const router = useRouter()

  const handleSearch = useCallback(() => {
    if (!value) return

    router.push(`/books/search?value=${value}`)
  }, [value, router])

  const handleKeyDownInputSearch = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        event.preventDefault()

        handleSearch()
      }
    },
    [handleSearch]
  )
  return (
    <Container>
      <ContentBox>
        <div className="content-logo">
          <BurguerMenu
            type="button"
            onClick={() => dispatch(toggleCategoriesAside())}
            className="burguer-menu"
          >
            {categoriesAsideIsOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </BurguerMenu>
          <Link href="/">
            <a className="link-to-home">
              <div className="logo-container">
                <Logo className="logo" path="/logo.svg" />
                <Typography
                  className="logoText"
                  fontSize={24}
                  fontWeight={700}
                  font="Montserrat"
                >
                  Bookstore
                </Typography>
              </div>
            </a>
          </Link>
        </div>
        <InputSearch
          className="input-search"
          onChange={event => setValue(event.target.value)}
          onKeyDown={handleKeyDownInputSearch}
          handleSearch={handleSearch}
          placeholder="Type to search"
        />
      </ContentBox>
    </Container>
  )
}
