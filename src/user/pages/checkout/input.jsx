import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'
import { TextField } from '@material-ui/core'
import { toNumber, limit } from '../../../helpers/input_parser'

const Input = props => {
  const errors = props.errors || []

  const onChange = event => {
    var { name, value } = event.target
    if (props.filter === 'number') {
      value = toNumber(value, props.maxLength)
      props.handleChange({ name, value })
    } else if (props.maxLength) {
      props.handleChange({ name, value: limit(value, props.maxLength) })
    } else {
      props.handleChange({ name, value })
    }
  }

  const handleRemoveErrors = event => {
    if (props.handleRemoveErrors) {
      props.handleRemoveErrors(event.target)
    }
  }

  return (
    <TextFiledStyled
      className={props.className}
      type={props.type || 'text'}
      variant={props.variant || 'outlined'}
      name={props.name}
      fullWidth={props.fullWidth || true}
      placeholder={props.placeholder}
      onChange={onChange}
      error={errors.includes(props.name)}
      onFocus={handleRemoveErrors}
      value={props.data[props.name] || ''}
      multiline={props.multiline || false}
      rows={props.rows || 1}
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
  data: propTypes.object,
  multiline: propTypes.bool,
  rows: propTypes.number,
  maxLength: propTypes.number,
  filter: propTypes.string
}

const TextFiledStyled = styled(TextField)`
  background: var(--user-primary);
  border-radius: 5px;
`

export default Input
