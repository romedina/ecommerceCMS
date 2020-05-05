import React from 'react'
import Input from './input'
import Select from './select'

import { object, string, array } from 'prop-types'

const InputGroud = props => {
  const { state = {}, name = '', errors = [], type = 'string' } = props

  if (type === 'string' || type === 'password') {
    return (
      <Input
        {...props}
        value={state[name] || ''}
        error={errors.includes(name)}
      />
    )
  }

  if (type === 'select') {
    return (
      <Select
        {...props}
        value={state[name] || ''}
        error={errors.includes(name)}
      />
    )
  }
}

InputGroud.propTypes = {
  state: object,
  name: string.isRequired,
  errors: array
}
export default InputGroud
