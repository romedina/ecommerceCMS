import React from 'react'
import propTypes from 'prop-types'

const Responsive = (props) => {
  const { matches } = window.matchMedia(`(${props.rule})`)

  if (!matches) return null
  return (
    <>
      {props.children}
    </>
  )
}

Responsive.propTypes = {
  children: propTypes.oneOfType([propTypes.string, propTypes.array, propTypes.object, propTypes.element, propTypes.number]),
  rule: propTypes.string
}

export default Responsive
