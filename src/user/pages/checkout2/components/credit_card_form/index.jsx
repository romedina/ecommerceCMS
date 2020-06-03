import { SelectStyled, Row, Form, Input, Flex, FlexItem, Container } from './styled'
import React from 'react'
import { Alert } from '@material-ui/lab'
import { func, object, oneOfType, string, number } from 'prop-types'
import Icons from '../icons'

// import api from '../../../../../api'

var months = [
  { Enero: '01' },
  { Febrero: '02' },
  { Marzo: '03' },
  { Abril: '04' },
  { Mayo: '05' },
  { Junio: '06' },
  { Julio: '07' },
  { Agosto: '08' },
  { Septiembre: '09' },
  { Octubre: '10' },
  { Noviembre: '11' },
  { Diciembre: '12' }
]

var years = [
  { 20: 20 },
  { 21: 21 },
  { 22: 22 },
  { 23: 23 },
  { 24: 24 },
  { 25: 25 },
  { 26: 26 },
  { 27: 27 },
  { 28: 28 },
  { 29: 29 },
  { 30: 30 },
  { 31: 31 },
  { 32: 32 },
  { 33: 33 },
  { 34: 34 },
  { 35: 35 },
  { 36: 36 },
  { 37: 37 },
  { 38: 38 },
  { 39: 39 },
  { 40: 40 }
]

const CreditCard = props => {
  return (
    <Container>
      <Row>
        {!!props.errorMessage && (
          <Alert severity='error'>{props.errorMessage}</Alert>
        )}
      </Row>
      <Form id='credit_card_form'>
        <Row>
          <Input
            {...props}
            maxlength={80}
            name='card_name'
            placeholder='Nombre en la tarjeta'
          />
        </Row>
        <Row>
          <Input
            maxlength={16}
            name='card_number'
            filter='number'
            placeholder='16 Dígitos de la Tarjeta'
            {...props}
          />
        </Row>
        <Row>
          <Flex>
            <FlexItem>
              <SelectStyled
                {...props}
                type='select'
                name='card_month'
                options={months}
                placeholder='Mes'
                onClick={props.onFocus}
              />
            </FlexItem>
            <FlexItem>
              <SelectStyled
                {...props}
                type='select'
                name='card_year'
                options={years}
                placeholder='Año'
                onClick={props.onFocus}
              />
            </FlexItem>
            <FlexItem>
              <Input
                {...props}
                maxlength={4}
                placeholder='CVV'
                name='card_cvv'
                type='password'
              />
            </FlexItem>
          </Flex>
        </Row>
        <input type='hidden' name='card_code' />
      </Form>
      <Icons type='card' />
    </Container>
  )
}

CreditCard.propTypes = {
  saveOperation: func,
  startProcess: func,
  endProcess: func,
  goToStep: func,
  data: object,
  totalPrice: oneOfType([string, number]),
  errorMessage: string,
  onFocus: func
}

export default CreditCard
