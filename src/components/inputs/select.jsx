import React from 'react'
import { Select as SelectBase, MenuItem, InputLabel, FormControl } from '@material-ui/core'
import propTypes, { number, string, bool } from 'prop-types'
import styled from 'styled-components'

const Select = props => {
  const objectTransformed = props.options.map(option => {
    const currentKey = Object.keys(option)[0]
    return {
      key: currentKey,
      value: option[currentKey]
    }
  })

  const inputProps = {}
  if (props.name) inputProps.name = props.name
  if (props.placeholder) inputProps.label = props.placeholder
  if (props.fullWidth) inputProps.fullWidth = true
  if (props.error) inputProps.error = true

  const valueCalculated = props.value ? props.value.toString() : ''

  return (
    <FormControlStyled variant='outlined'>
      <InputLabel id={props.name}>{props.placeholder}</InputLabel>
      <SelectInput
        id={props.name}
        className={props.className}
        onChange={props.onChange}
        value={valueCalculated}
        {...inputProps}
      >
        {objectTransformed.map((option, index) => (
          <MenuItem key={index} value={option.value}>{option.key}</MenuItem>
        ))}
      </SelectInput>
    </FormControlStyled>
  )
}

const FormControlStyled = styled(FormControl)`
  width: 100%;
  & .MuiInputLabel-outlined {
    transform: translate(100%, 100%) scale(1);
  }
  & .MuiInputLabel-outlined.MuiInputLabel-shrink {
    transform: translate(14px, -6px) scale(0.75);
  }
`
const SelectInput = styled(SelectBase)`
  & .MuiSelect-outlined.MuiSelect-outlined {
    padding: 12px;
    background: #fff;
  }
  & .MuiInputLabel-outlined {
    transform: translate(100%, 100%) scale(1);
  }
  & .MuiInputLabel-outlined.MuiInputLabel-shrink {
    transform: translate(14px, -6px) scale(0.75);
  }
`
Select.propTypes = {
  onChange: propTypes.func,
  options: propTypes.arrayOf(propTypes.object),
  value: propTypes.oneOfType([string, number]),
  variant: propTypes.string,
  className: propTypes.string,
  name: propTypes.string.isRequired,
  placeholder: propTypes.string,
  fullWidth: propTypes.bool,
  error: bool
}

export default Select
