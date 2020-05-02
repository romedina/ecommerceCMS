import React from 'react'
import { TextField } from '@material-ui/core'
import styled from 'styled-components'
import { func, string, bool, object, oneOfType, number, array } from 'prop-types'

const CreateInput = (props) => {
  const onChange = (event) => {
    if (props.onChange) props.onChange(event.target)
    else props.handleChange(event.target)
  }

  const handleRemoveError = (event) => {
    if (props.removeError) { props.removeError(event.target) }
  }

  const errorsCalculated = props.errors ? props.errors.includes(props.name) : false
  const valueCalculated = props.value ? props.value || '' : props[props.name] || ''

  if (props.type === 'text') {
    return (
      <TextFiledStyled
        placeholder={props.placeholder || null}
        className={props.className}
        onChange={onChange}
        value={valueCalculated}
        name={props.name}
        fullWidth={props.fullWidth}
        inputProps={{ maxLength: props.maxLength || null }}
        error={errorsCalculated}
        onClick={handleRemoveError}
        variant='outlined'
        type={props.type || 'text'}
      />
    )
  }

  if (props.type === 'password') {
    return (
      <TextFiledStyled
        placeholder={props.placeholder || null}
        className={props.className}
        onChange={onChange}
        value={valueCalculated}
        name={props.name}
        fullWidth={props.fullWidth}
        inputProps={{ maxLength: props.maxLength || null }}
        error={errorsCalculated}
        onClick={handleRemoveError}
        variant='outlined'
        type={props.type || 'password'}
      />
    )
  }

  if (props.type === 'number') {
    return (
      <TextFiledStyled
        placeholder={props.placeholder || null}
        className={props.className}
        onChange={onChange}
        value={props.value || props[props.name]}
        name={props.name}
        fullWidth={props.fullWidth}
        inputProps={{ maxLength: props.max || null }}
        error={errorsCalculated}
        onClick={handleRemoveError}
        variant='outlined'
        type={props.type || 'text'}
      />
    )
  }

  if (props.type === 'textarea') {
    return (
      <TextAreaStyled
        rows={6}
        multiline
        className={props.className}
        onChange={onChange}
        value={valueCalculated}
        name={props.name}
        fullWidth={props.fullWidth}
        inputProps={{ maxLength: props.maxLength || null }}
        error={errorsCalculated}
        onClick={handleRemoveError}
        variant='outlined'
        type={props.type || 'text'}
      />
    )
  }

  return null
}

CreateInput.propTypes = {
  onChange: func,
  type: string,
  removeError: func,
  className: string,
  fullWidth: bool,
  name: string,
  value: oneOfType([string, number, bool, object]),
  maxLength: number,
  placeholder: string,
  max: number,
  errors: array,
  handleChange: func
}

export const TextFiledStyled = styled(TextField)`
  .MuiOutlinedInput-notchedOutline {
    border: 1px solid;
    ${props => !props.error ? 'border-color: var(--main-blue)!important' : ''}
  }
  .MuiInputBase-root {
    border-color: var(--main-blue)!important
  }
  .MuiOutlinedInput-root:hover{
    border-color: var(--main-blue)!important
  }
  .MuiOutlinedInput-input{
    color: var(--main-blue)
  }
`
const TextAreaStyled = styled(TextField)`
  
  .MuiOutlinedInput-notchedOutline {
    border: 1px solid;
    ${props => !props.error ? 'border-color: var(--main-blue)!important' : ''}
  }
  .MuiInputBase-root {
    border-color: var(--main-blue)!important
  }
  .MuiOutlinedInput-root:hover{
    border-color: var(--main-blue)!important
  }
  .MuiOutlinedInput-input{
    color: var(--main-blue)
  }
`
export default CreateInput
