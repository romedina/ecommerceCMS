import React from 'react'
import Section from './Sections'
import { object } from 'prop-types'
import Paypal from './paypal_form'
import CreditCard from './creditCard'
import Store from './store'

const Confirm = props => {
  return (
    <Section {...props}>
      {props.data.methodPay === 'PayPal' && (
        <Paypal {...props} />
      )}
      {props.data.methodPay === 'card' && (
        <CreditCard {...props} />
      )}
      {props.data.methodPay === 'cash' && (
        <Store {...props} />
      )}
    </Section>
  )
}

Confirm.propTypes = {
  data: object
}

export default Confirm
