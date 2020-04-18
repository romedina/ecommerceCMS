/* eslint-disable camelcase */
import React, { useState } from 'react'
import View from './view'
import useObjectState from '../../../hooks/useObjectState'
import article from '../../../modules/article'
import { useSelector, useDispatch } from 'react-redux'
import { setInitialState } from '../../../flux/cart'

const Checkout = props => {
  const dispatch = useDispatch()
  const itemsOncart = useSelector(state => state.cart)
  const [currentView, setCurrentView] = useState('form') // form || loding || success
  const [data, setData] = useObjectState({})
  const shipping = 50

  const handleChange = ({ name, value }) => {
    setData({ [name]: value })
  }

  const onAprove = async () => {
    setCurrentView('loading')
    const { email, name, lastname, street_number, suburb, city, state, postal_code, number, methodPay } = data
    const items = itemsOncart.map(item => {
      const { id, price, quantity, sku, title, picture } = item
      return { id, price, quantity, sku, title, picture }
    })
    await article.saveOrder({
      user: { email, name, lastname, number },
      shipTo: { street_number, suburb, city, state, postal_code },
      methodPay,
      items
    })
    setCurrentView('success')
    dispatch(setInitialState())
  }

  const handlePay = event => {
    onAprove()
  }

  return (
    <View
      currentView={currentView}
      setCurrentView={setCurrentView}
      data={data}
      handleChange={handleChange}
      onAprove={onAprove}
      handlePay={handlePay}
      shipping={shipping}
    />
  )
}

export default Checkout
