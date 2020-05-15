import React from 'react'
import { Content, Radio, Option, Icon, Text, Alert } from './styled'
import { Alert as AlertBase } from '@material-ui/lab'
import { string, func, object } from 'prop-types'
import { CreditCard, LocalAtm, AccountBalance, AttachMoney } from '@material-ui/icons'

const Shipping = props => {
  const onOptionClick = value => event => {
    console.log(value)
    props.onChange({ target: { name: 'methodPay', value } })
    props.onFocus({ target: { name: 'methodPay', value } })
  }

  return (
    <>
      {props.errorMessage && (
        <Alert as={AlertBase} severity='error'>{props.errorMessage}</Alert>
      )}
      <Content value={props.state.methodPay || ''}>
        <Option onClick={onOptionClick('paypal')}>
          <Radio value='paypal' />
          <Icon as={AttachMoney} />
          <Text>Paypal</Text>
        </Option>
        <Option onClick={onOptionClick('card')}>
          <Radio value='card' />
          <Icon as={CreditCard} />
          <Text>Tarjeta de crédito o débito</Text>
        </Option>
        <Option onClick={onOptionClick('cash')}>
          <Radio value='cash' />
          <Icon as={LocalAtm} />
          <Text>Efectivo en puntos de pago</Text>
        </Option>
        <Option onClick={onOptionClick('spei')}>
          <Radio value='spei' />
          <Icon as={AccountBalance} />
          <Text>Transferencia electrónica</Text>
        </Option>
      </Content>
    </>
  )
}

Shipping.propTypes = {
  errorMessage: string,
  onChange: func,
  state: object,
  onFocus: func
}

export default Shipping
