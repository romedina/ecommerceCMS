import React, { useEffect } from 'react'
import styled from 'styled-components'
import ButtonBase from '../../../components/inputs/Button'
import { func } from 'prop-types'

// paypal config
const paypalConfig = props => {
  return {
    createOrder: function (data, actions) {
      return actions.order.create({
        purchase_units: [{
          amount: { value: props.totalPrice }
        }]
      })
    },
    onApprove: (data, actions) => {
      props.startProcess()
      const status = actions.order.capture().then((details) => {
        const { id, payer } = details
        props.saveOperation('payed', { id, payer })
      })
      return status
    }
  }
}

const PaypalForm = props => {
  // render button paypal
  useEffect(any => {
    window.paypal.Buttons(paypalConfig({ ...props })).render('#render_button')
  }, [])

  return (
    <ContentPaypal>
      <div id='render_button' />
      <Button onClick={event => props.goToStep('Método de Pago')}>Cambiar método de pago</Button>
    </ContentPaypal>
  )
}

PaypalForm.propTypes = {
  goToStep: func
}
const Button = styled(ButtonBase)`
  width: 100%
`

const ContentPaypal = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 250px;
  align-items: center;
  & div {
    width: 100%;
  }
`

export default PaypalForm
