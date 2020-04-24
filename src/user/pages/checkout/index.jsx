/* eslint-disable camelcase */
import React, { useState } from 'react'
import View from './view'
import useObjectState from '../../../hooks/useObjectState'
import article from '../../../modules/article'
import { useSelector, useDispatch } from 'react-redux'
import { setInitialState } from '../../../flux/cart'
import sumPrice from '../../../helpers/sumPrice'

const Checkout = props => {
  const dispatch = useDispatch()
  const itemsOncart = useSelector(state => state.cart)
  const [currentView, setCurrentView] = useState('form') // form || loding || SuccessPaypal
  const [data, setData] = useObjectState({})
  const shipping = 50
  const totalPrice = (sumPrice(itemsOncart) + (shipping))

  const handleChange = ({ name, value }) => {
    setData({ [name]: value })
  }

  const onApprove = async (metadata = {}) => {
    setCurrentView('loading')
    const { email, name, lastname, street_number, suburb, city, state, postal_code, number, methodPay } = data
    const items = itemsOncart.map(item => {
      const { id, price, quantity, sku, title, picture } = item
      return { id, price, quantity, sku, title, picture }
    })
    await article.saveOrder({
      status: 'payed',
      metadata,
      user: { email, name, lastname, number },
      shipTo: { street_number, suburb, city, state, postal_code },
      methodPay,
      items
    })
    setCurrentView('SuccessPaypal')
    dispatch(setInitialState())
  }

  const handlePay = event => {
    window.alert('paying...')
  }

  return (
    <View
      currentView={currentView}
      setCurrentView={setCurrentView}
      data={data}
      handleChange={handleChange}
      onApprove={onApprove}
      handlePay={handlePay}
      shipping={shipping}
      totalPrice={totalPrice}
    />
  )
}

export default Checkout
