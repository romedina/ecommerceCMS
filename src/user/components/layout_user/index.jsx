import React from 'react'
import propTypes from 'prop-types'
import HeaderContact from './header_contact'
import Header from './header'
import Footer from '../footer'

const LayoutUser = (props) => {
  return (
    <>
      <HeaderContact />
      <Header />
      {props.children}
      <Footer />
    </>
  )
}

LayoutUser.propTypes = {
  children: propTypes.oneOfType([propTypes.string, propTypes.object, propTypes.array])
}

export default LayoutUser
