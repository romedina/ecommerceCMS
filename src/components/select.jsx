import React from 'react'
import { Select as SelectBase, MenuItem } from '@material-ui/core'
import propTypes from 'prop-types'

const Select = props => {
  const objectTransformed = props.options.map(option => {
    const currentKey = Object.keys(option)[0]
    return {
      key: currentKey,
      value: option[currentKey]
    }
  })

  return (
    <SelectBase
      className={props.className}
      onChange={props.onChange}
      value={props.value || ''}
      variant={props.variant || 'outlined'}
    >
      {objectTransformed.map((option, index) => (
        <MenuItem key={index} value={option.value}>{option.key}</MenuItem>
      ))}
    </SelectBase>
  )
}

Select.propTypes = {
  onChange: propTypes.func,
  options: propTypes.arrayOf(propTypes.object),
  value: propTypes.string,
  variant: propTypes.string,
  className: propTypes.string
}
export default Select
