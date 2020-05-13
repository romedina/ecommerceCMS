/* eslint-disable camelcase */
import React from 'react'
import View from './view'
import useObjectState from '../../../hooks/useObjectState'
import orders from '../../../modules/orders'
import { useSelector } from 'react-redux'
import { setInitialState } from '../../../flux/cart'
import sumPrice from '../../../helpers/sumPrice'
import { activeLoading, hideLoading } from '../../../flux/loading'
import { dispatch } from '../../../store'
import { useHistory } from 'react-router-dom'

const Checkout = props => {
  const history = useHistory()
  const itemsOncart = useSelector(state => state.cart)
  const [data, setData] = useObjectState({})

  const shipping = 50
  const subTotal = sumPrice(itemsOncart)
  const totalPrice = subTotal + shipping

  const handleChange = ({ name, value }) => {
    setData({ [name]: value })
  }

  const saveOperation = async (status, metadata = {}, successMetadata = {}) => {
    const { email, name, lastname, street_number, suburb, city, state, postal_code, number, methodPay } = data
    const items = itemsOncart.map(item => {
      const { id, price, quantity, sku, title, picture } = item
      return { id, price, quantity, sku, title, picture }
    })
    await orders.save({
      subTotal,
      shipping,
      totalPrice,
      status,
      metadata,
      user: { email, name, lastname, number },
      shipTo: { street_number, suburb, city, state, postal_code },
      methodPay,
      items
    })
    endProcess()
    history.push('/success', { ...successMetadata, methodPay })
    dispatch(setInitialState())
  }

  const startProcess = () => dispatch(activeLoading('Estamos procesando tu pago, porfavor espere un momento...'))
  const endProcess = () => dispatch(hideLoading())

  return (
    <View
      startProcess={startProcess}
      endProcess={endProcess}
      data={data}
      handleChange={handleChange}
      saveOperation={saveOperation}
      shipping={shipping}
      totalPrice={totalPrice}
      subTotal={subTotal}
    />
  )
}

export default Checkout
