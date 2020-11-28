import Link from 'next/link'

import Typography from '../Typography'

import { Container } from './styles'

export type Props = {
  to: string
  text: string
  isActive?: boolean
  handleClick?: () => void
}

export default function NavLink({
  to,
  text,
  isActive = false,
  handleClick
}: Props): JSX.Element {
  return (
    <Container isActive={isActive}>
      <Link href={to}>
        <a onClick={handleClick}>
          <Typography
            fontWeight={isActive ? 700 : 400}
            fontSize={isActive ? 16 : 12}
            color={isActive ? 'textBlack' : 'textGray'}
            font="Montserrat"
          >
            {text}
          </Typography>
        </a>
      </Link>
    </Container>
  )
}
