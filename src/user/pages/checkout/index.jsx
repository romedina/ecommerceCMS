import React, { useState } from 'react'
import View from './view'
import useObjectState from '../../../hooks/useObjectState'

const Checkout = props => {
  const [currentView, setCurrentView] = useState('form') // form || loding || success
  const [data, setData] = useObjectState({})

  const handleChange = ({ name, value }) => {
    setData({ [name]: value })
  }

  return (
    <View
      currentView={currentView}
      setCurrentView={setCurrentView}
      data={data}
      handleChange={handleChange}
    />
  )
}

export default Checkout
