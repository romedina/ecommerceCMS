import React, { useEffect } from 'react'
import Section from './Sections'
import paypalOption from './paypal'
import { object } from 'prop-types'
import styled from 'styled-components'

const Confirm = props => {
  // render button paypal
  useEffect(any => {
    if (props.data.methodPay === 'PayPal') {
      window.paypal.Buttons(paypalOption({ ...props })).render('#render_button')
    }
  }, [])

  return (
    <Section {...props}>
      <ContentPaypal>
        <div id='render_button' />
      </ContentPaypal>
    </Section>
  )
}

const ContentPaypal = styled.div`
  display: flex;
  min-height: 250px;
  align-items: center;
  & div {
    width: 100%;
  }
`

Confirm.propTypes = {
  data: object
}

export default Confirm
