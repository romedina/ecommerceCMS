import React from 'react'
import { ButtonBase } from '@material-ui/core'
import propTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

const Link = (props) => {
  const histoy = useHistory()

  const handleClick = (event) => {
    event.stopPropagation()
    histoy.push(props.to)
  }

  return (
    <ButtonBase className={props.className} onClick={props.handleClick || handleClick}>
      {props.children}
    </ButtonBase>
  )
}

Link.propTypes = {
  className: propTypes.string,
  children: propTypes.oneOfType([propTypes.string, propTypes.object, propTypes.array]),
  to: propTypes.string,
  handleClick: propTypes.func
}

export default Link
