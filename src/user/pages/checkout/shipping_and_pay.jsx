import React from 'react'
import Section from './Sections'
import styled from 'styled-components'
import propTypes from 'prop-types'
import { Radio, RadioGroup } from '@material-ui/core'
import { Alert as AlertBase } from '@material-ui/lab'

const Shipping = props => {
  return (
    <Section {...props}>
      {props.steps[props.currentStep] !== 'Método de Pago' && (
        <Group>
          <Row>
            <RowText>Contacto:</RowText>
            {props.data.email}
          </Row>
          <Row>
            <RowText>Enviar a:</RowText>
            {`${props.data.name} 
            ${props.data.lastname}, 
            ${props.data.street_number}, 
            ${props.data.suburb}, 
            ${props.data.city}, 
            ${props.data.postal_code}`}
          </Row>
          <ChangeOption onClick={props.handleChangeDirections}>
            Cambiar
          </ChangeOption>
        </Group>
      )}
      {props.steps[props.currentStep] === 'Método de Pago' && (
        <Group as={RadioGroup} onChange={event => props.handleChange(event.target)} value={props.data.methodPay || 'unselected'} name='methodPay'>
          <Describe>Método de Pago</Describe>
          {props.errors.length > 0 && (
            <Alert severity='error'>Porfavor selecciona un método de pago</Alert>
          )}
          <Row>
            <Radio value='PayPal' onClick={props.handleRemoveErrors} />
            <RowText>PayPal</RowText>
          </Row>
          <Row>
            <Radio value='card' onClick={props.handleRemoveErrors} />
            <RowText>Tarjeta de crédito o débito</RowText>
          </Row>
          <Row>
            <Radio value='cash' onClick={props.handleRemoveErrors} />
            <RowText>Pago en efectivo</RowText>
          </Row>
          <Row>
            <Radio value='Spei' onClick={props.handleRemoveErrors} />
            <RowText>SPEI</RowText>
          </Row>
        </Group>
      )}
    </Section>
  )
}

Shipping.propTypes = {
  data: propTypes.object,
  handleChangeDirections: propTypes.func,
  handleChange: propTypes.func,
  steps: propTypes.array,
  currentStep: propTypes.number,
  errors: propTypes.array,
  handleRemoveErrors: propTypes.func,
  totalPrice: propTypes.number
}

const Row = styled.div`
  background: var(--user-gray-light);
  padding: 10px;
  border-radius: 5px;
  font-weight: bold;
  color: black;
  margin-bottom: 15px;
`
const ChangeOption = styled.div`
  color: var(--user-gray);
  display: flex;
  justify-content: flex-end;
  font-size: 1.1em;
  cursor: pointer;
`
const Group = styled.div`
  margin-bottom: 20px;
`
const Describe = styled.h2`
  color: var(--user-black);
`
const Alert = styled(AlertBase)`
  margin-bottom: 15px;
`
const RowText = styled.span`
  color: var(--user-gray);
  margin-right: 15px;
`
export default Shipping
