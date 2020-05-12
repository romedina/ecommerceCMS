import React, { useState, useEffect, memo } from 'react'
import propTypes from 'prop-types'

const Responsive = (props) => {
  const mediaQuery = window.matchMedia(`(${props.rule})`)
  const [, reRender] = useState(0)

  const handleChangeSize = event => {
    reRender(current => current + 1)
  }

  useEffect(() => {
    mediaQuery.addListener(handleChangeSize)
    return event => mediaQuery.removeListener(handleChangeSize)
  }, [mediaQuery])

  if (!mediaQuery.matches) return null

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

export default memo(Responsive)
