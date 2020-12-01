import { forwardRef, InputHTMLAttributes } from 'react'
import { FiSearch } from 'react-icons/fi'

import { Container } from './styles'

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  handleSearch?: () => void
}

const InputSearch: React.ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { className, handleSearch, ...rest },
  ref
) => {
  return (
    <Container className={className}>
      <button type="button" onClick={handleSearch} className="icon">
        <FiSearch size={20} />
      </button>
      <input ref={ref} {...rest} />
    </Container>
  )
}

export default forwardRef(InputSearch)
