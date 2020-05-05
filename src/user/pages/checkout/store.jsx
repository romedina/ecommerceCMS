import React from 'react'
import styled from 'styled-components'
import ButtonBase from '../../../components/inputs/Button'
import api from '../../../api'
import { func, object } from 'prop-types'

const Store = props => {
  const onPayClick = async event => {
    if (props.data.methodPay === 'cash') return payWithStore()
    if (props.data.methodPay === 'spei') return payWithSpei()
    throw new Error('Error method pay')
  }

  const payWithStore = async () => {
    console.log('paying with store')
    props.startProcess()
    const response = await api.payouts.store(false)
    props.saveOperation('pending', response)
    props.endProcess()
  }

  const payWithSpei = async () => {
    console.log('paying with spei')
    props.startProcess()
    const response = await api.payouts.spei(false)
    props.saveOperation('pending', response)
    props.endProcess()
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
  data: object
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
