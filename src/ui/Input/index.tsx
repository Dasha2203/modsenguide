import { forwardRef } from 'react'
import { TextFieldProps } from '@mui/material'

import { StyledInput } from './styles'

const Input = forwardRef<HTMLInputElement, TextFieldProps>(({
  label,
  onChange,
  value,
  error,
  helperText,
  fullWidth,
  size,
  variant
}, forwardRef) => (
  <StyledInput
    ref={forwardRef}
    label={label}
    onChange={onChange}
    value={value}
    size={size}
    fullWidth={fullWidth}
    margin="normal"
    variant={variant}
    error={error}
    helperText={helperText}
  />
))

export default Input