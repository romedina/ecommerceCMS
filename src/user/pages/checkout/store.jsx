import React from 'react'
import styled from 'styled-components'
import ButtonBase from '../../../components/inputs/Button'
import api from '../../../api'
import { func, object, number } from 'prop-types'

const Store = props => {
  const onPayClick = async event => {
    if (props.data.methodPay === 'cash') return payWithStore()
    if (props.data.methodPay === 'spei') return payWithSpei()
    throw new Error('Error method pay')
  }

  const payWithStore = async () => {
    try {
      props.startProcess()
      const response = await api.payouts.store({
        iva: '10',
        subtotal: props.totalPrice.toString(),
        method: 'store',
        deviceId: window.OpenPay.deviceData.setup(),
        description: 'checkout',
        name: props.data.name,
        phone: props.data.number,
        mail: props.data.email,
        amount: props.totalPrice.toString()
      })
      await props.saveOperation('pending', null, response.charge)
      props.endProcess()
    } catch (error) {
      props.endProcess()
      console.error('error intentalo nuevamente')
    }
  }

  const payWithSpei = async () => {
    try {
      props.startProcess()
      const response = await api.payouts.spei({
        iva: '0',
        subtotal: props.totalPrice.toString(),
        method: 'bank_account',
        deviceId: window.OpenPay.deviceData.setup(),
        description: 'checkout',
        name: props.data.name,
        phone: props.data.number,
        mail: props.data.email,
        amount: props.totalPrice.toString()
      })
      await props.saveOperation('pending', null, response.charge)
      props.endProcess()
    } catch (error) {
      props.endProcess()
      console.error('error intentalo nuevamente')
    }
  }

  return (
    <Content>
      <Button onClick={onPayClick} variant='contained'>Generar orden de pago</Button>
      <Button onClick={event => props.goToStep('Método de Pago')} variant='outlined'>Cambiar método de pago</Button>
    </Content>
  )
}
Store.propTypes = {
  startProcess: func,
  endProcess: func,
  saveOperation: func,
  goToStep: func,
  data: object,
  totalPrice: number
}

const Button = styled(ButtonBase)`
  width: 220px;
  margin-bottom: 20px;
`

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  flex-direction: column;
`

export default Store
