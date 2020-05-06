/* eslint-disable camelcase */
import React, { useState } from 'react'
import View from './view'
import useObjectState from '../../../hooks/useObjectState'
import orders from '../../../modules/orders'
import { useSelector } from 'react-redux'
import { setInitialState } from '../../../flux/cart'
import sumPrice from '../../../helpers/sumPrice'
import { activeLoading, hideLoading } from '../../../flux/loading'
import { dispatch } from '../../../store'

const successMeta = {
  id: 't6utz9dywve6zipnppys',
  description: 'Cargo con banco',
  error_message: null,
  authorization: null,
  amount: 100,
  operation_type: 'in',
  payment_method: {
    type: 'bank_transfer',
    bank: 'BBVA Bancomer',
    agreement: '1411217',
    clabe: '00000000000000000000',
    name: '11094690394055678934'
  },
  order_id: 'oid-00051',
  transaction_type: 'charge',
  creation_date: '2013-12-05T17:50:09-06:00',
  currency: 'MXN',
  status: 'in_progress',
  method: 'bank_account'
}

const Checkout = props => {
  const itemsOncart = useSelector(state => state.cart)
  const [currentView, setCurrentView] = useState('successSpei') // form || payedSuccess || successCash || successSpei
  const [data, setData] = useObjectState({})
  const [successMetadata, setSuccessMetadata] = useState(successMeta)

  const shipping = 50
  const subTotal = sumPrice(itemsOncart)
  const totalPrice = subTotal + shipping

  const handleChange = ({ name, value }) => {
    setData({ [name]: value })
  }

  const saveOperation = async (status, metadata = {}) => {
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
    if (data.methodPay === 'PayPal' || data.methodPay === 'card') {
      setCurrentView('payedSuccess')
    }
    if (data.methodPay === 'cash') {
      setCurrentView('successCash')
    }
    if (data.methodPay === 'spei') {
      setCurrentView('successSpei')
    }
    endProcess()
    dispatch(setInitialState())
  }

  const startProcess = () => dispatch(activeLoading('Estamos procesando tu pago, porfavor espere un momento...'))
  const endProcess = () => dispatch(hideLoading())

  return (
    <View
      startProcess={startProcess}
      endProcess={endProcess}
      currentView={currentView}
      setCurrentView={setCurrentView}
      data={data}
      handleChange={handleChange}
      saveOperation={saveOperation}
      shipping={shipping}
      totalPrice={totalPrice}
      subTotal={subTotal}
      successMetadata={successMetadata}
      setSuccessMetadata={setSuccessMetadata}
    />
  )
}

export default Checkout
