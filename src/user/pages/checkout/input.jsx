import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'
import { TextField } from '@material-ui/core'

const Input = props => {
  const errors = props.errors || []
  const onChange = event => {
    props.handleChange(event.target)
  }

  return (
    <TextFiledStyled
      className={props.className}
      type={props.type || 'outlined'}
      variant={props.variant || 'outlined'}
      name={props.name}
      fullWidth={props.fullWidth || true}
      placeholder={props.placeholder}
      onChange={onChange}
      error={errors.includes(props.name)}
      onFocus={props.handleRemoveErrors}
      value={props.data[props.name] || ''}
    />
  )
}

Input.propTypes = {
  placeholder: propTypes.string,
  type: propTypes.string,
  variant: propTypes.string,
  name: propTypes.string,
  fullWidth: propTypes.bool,
  handleChange: propTypes.func,
  className: propTypes.string,
  errors: propTypes.array,
  handleRemoveErrors: propTypes.func,
  data: propTypes.object
}

const TextFiledStyled = styled(TextField)`
  background: var(--user-primary);
  border-radius: 5px;
`

export default Input
