import { ButtonBase } from '@material-ui/core'
import styled from 'styled-components'
import React from 'react'
import { string, func, oneOfType, object } from 'prop-types'
import { useHistory } from 'react-router-dom'

const Button = styled(ButtonBase)`
  font-size: 1.2em;
  padding: 10px 0px;
  border-radius: 5px;
  color: ${props => props.variant === 'contained' ? '#fff' : 'initial'};
  border: ${props => props.variant === 'contained' ? '' : '1px solid var(--user-gray-light)'};
  background: ${props => props.variant === 'contained' ? 'var(--user-black)' : '#fff'};
`
const ButtonComponent = props => {
  const history = useHistory()

  const onClick = event => {
    if (props.onClick) props.onClick(event)
    if (props.to) history.push(props.to)
  }

  return (
    <Button
      {...props}
      onClick={onClick}
    />
  )
}

ButtonComponent.propTypes = {
  className: string,
  onClick: func,
  to: oneOfType([string, object])
}

export default ButtonComponent
