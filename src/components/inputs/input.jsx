import React from 'react'
import styled from 'styled-components'
import { func, string, oneOf, oneOfType, number, bool } from 'prop-types'
import { toNumber, limitLength } from '../../helpers/input_parser'
import { TextField } from '@material-ui/core'

const Input = props => {
  const onChange = event => {
    if (props.maxlength) event.target.value = limitLength(event.target.value, props.maxlength)
    if (props.filter === 'number') event.target.value = toNumber(event.target.value)
    props.onChange(event)
  }

  const inputProps = {}
  if (props.name) inputProps.name = props.name
  if (props.placeholder) inputProps.label = props.placeholder
  if (props.error) inputProps.error = props.error
  if (props.onFocus) inputProps.onFocus = props.onFocus

  return (
    <InputStyled
      autoComplete='off'
      className={props.className}
      onChange={onChange}
      value={props.value}
      variant='outlined'
      {...inputProps}
    />
  )
}

Input.propTypes = {
  className: string,
  onChange: func,
  filter: oneOf(['number', 'string']),
  value: oneOfType([string, number]),
  name: string,
  placeholder: string,
  error: bool,
  onFocus: func,
  maxlength: number
}

const InputStyled = styled(TextField)`
  width: 100%; 
  & .MuiOutlinedInput-root {
    background: #fff;
  }
  & .MuiOutlinedInput-input {
    padding: 12px;
  }
  & .MuiInputLabel-outlined {
    transform: translate(20px, 100%) scale(1);
  }
  & .MuiInputLabel-outlined.MuiInputLabel-shrink {
    transform: translate(14px, -6px) scale(0.75);
  }
`

export default Input
