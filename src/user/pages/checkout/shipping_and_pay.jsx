import React from 'react'
import Section from './Sections'
import styled from 'styled-components'
import propTypes from 'prop-types'
import { Radio, RadioGroup } from '@material-ui/core'
import { Alert as AlertBase } from '@material-ui/lab'

const Shipping = props => {
  return (
    <Section {...props}>
      <Group>
        <Row>
          <span>Contacto:</span>
          {props.data.email}
        </Row>
        <Row>
          <span>Enviar a:</span>
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
      {props.steps[props.currentStep] === 'Pago' && (
        <Group as={RadioGroup} onChange={event => props.handleChange(event.target)} value={props.data.methodPay || 'unselected'} name='methodPay'>
          <Describe>Metodo de pago</Describe>
          {props.errors.length > 0 && (
            <Alert severity='error'>Porfavor selecciona un methodo de pago</Alert>
          )}
          <Row>
            <Radio value='PayPal' onClick={props.handleRemoveErrors} />
            Paypal
          </Row>
          <Row>
            <Radio value='Konecta' onClick={props.handleRemoveErrors} />
            Connecta
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
  handleRemoveErrors: propTypes.func
}

const Row = styled.div`
  background: var(--user-gray-light);
  padding: 10px;
  border-radius: 5px;
  font-weight: bold;
  color: black;
  margin-bottom: 15px;
  & span {
    color: var(--user-gray);
    margin-right: 15px;
  }
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
  margin-bottom: 15px
`
export default Shipping
