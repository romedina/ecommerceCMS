import React, { useEffect, useState } from 'react'
import { Content, Title, Box, Row, Button, ShadowPaypal } from './styled'
import { array, number, func, object } from 'prop-types'
import currency from '../../../../../helpers/currency'

const paypalConfig = props => {
  return {
    createOrder: function (data, actions) {
      return actions.order.create({
        purchase_units: [{
          amount: { value: props.totalPrice },
          path: 'custom_path'
        }]
      })
    },
    onApprove: (data, actions) => {
      props.startProcess()
      const status = actions.order.capture().then((details) => {
        const asyncOperation = async () => {
          const { id, payer } = details
          const idCreated = await props.saveOperation()
          await props.successOperation({ notific: true, id: idCreated, metadata: { id, payer }, status: 'payed' })
        }
        asyncOperation()
      })
      return status
    }
  }
}

const Summary = props => {
  const [render, setRender] = useState(false)

  // render button paypal
  useEffect(any => {
    if (props.currentStep === 3 && props.data.methodPay === 'paypal' && render) {
      window.document.getElementById('render_button').innerHTML = ''
      window.paypal.Buttons(paypalConfig({ ...props })).render('#render_button')
    }
  }, [props.data.methodPay, props.currentStep, render])

  // media query handler
  const handleCheckMediaQuery = mediaQuery => {
    if (!mediaQuery.matches || props.currentStep === 3) return setRender(true)
    return setRender(false)
  }

  // media query listener
  useEffect(() => {
    const media = window.matchMedia('(max-width:700px)')
    media.addListener(handleCheckMediaQuery)
    handleCheckMediaQuery(media)
    return () => media.removeListener(handleCheckMediaQuery)
  }, [props.currentStep])

  if (!render) return null

  return (
    <Content>
      <Box>
        <Title>Resumen de compra</Title>
      </Box>
      <Box>
        <Row>
          <span>Productos({props.itemsOncart.length}):</span>
          <span>$ {currency.formatMoney(props.subTotal)}</span>
        </Row>
        <Row>
          <span>Envío:</span>
          <span>$ {currency.formatMoney(props.shipping)}</span>
        </Row>
        {!!props.tax && (
          <Row>
            <span>Impuesto:</span>
            <span>$ {currency.formatMoney(props.tax)}</span>
          </Row>
        )}
        <Row>
          <span>Total:</span>
          <span>{currency.formatMoney(props.totalPrice)}</span>
        </Row>
      </Box>
      <Box>
        <Row>
          {props.currentStep === 3 && (
            <Button onClick={props.onConfirm} variant='contained'>
              Confirmar compra
              <ShadowPaypal id='render_button' />
            </Button>
          )}
        </Row>
      </Box>
    </Content>
  )
}

Summary.propTypes = {
  itemsOncart: array,
  subTotal: number,
  shipping: number,
  totalPrice: number,
  onConfirm: func,
  currentStep: number,
  data: object,
  tax: number
}

export default Summary
