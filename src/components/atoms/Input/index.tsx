import { forwardRef, InputHTMLAttributes } from 'react'
import Typography from '../Typography'

import { Container } from './styles'

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  fieldName: string
  hasError?: boolean
  error?: string
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { label, fieldName, hasError = false, error, ...rest },
  ref
) => {
  return (
    <Container hasError={hasError}>
      <label htmlFor={fieldName}>
        <Typography fontSize={16}>{label}</Typography>
      </label>
      <input ref={ref} name={fieldName} id={fieldName} {...rest} />
      {hasError && error && (
        <Typography className="error-text" color="error" fontSize={12}>
          {error}
        </Typography>
      )}
    </Container>
  )
}

export default forwardRef(Input)
