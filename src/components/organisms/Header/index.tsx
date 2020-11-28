import { useCallback, useState, KeyboardEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Logo from '@/components/atoms/Logo'
import Typography from '@/components/atoms/Typography'
import { ContentBox } from '@/components/molecules/ContentBox/styles'
import InputSearch from '@/components/atoms/InputSearch'

import { Container } from './styles'

export default function Header(): JSX.Element {
  const [searchValue, setSearchValue] = useState('')

  const router = useRouter()

  const handleSearch = useCallback(() => {
    if (!searchValue) return

    router.push(`/books/search?query=${searchValue}`)
  }, [searchValue, router])

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
        <Link href="/">
          <a className="link-to-home">
            <div className="logo-container">
              <Logo path="/logo.svg" />
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
        <InputSearch
          onChange={event => setSearchValue(event.target.value)}
          onKeyDown={handleKeyDownInputSearch}
          handleSearch={handleSearch}
          placeholder="Type to search"
        />
      </ContentBox>
    </Container>
  )
}
