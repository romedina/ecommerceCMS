import { Button, SelectStyled, Row, Form, Input, Flex, FlexItem } from './styled'
import React from 'react'
import useObjectState from '../../../../../hooks/useObjectState'
import { Alert } from '@material-ui/lab'
import { requires } from '../../../../../helpers/validateform'
import { func, object, oneOfType, string, number } from 'prop-types'
import api from '../../../../../api'
const { validateCardNumber, validateCVC, validateExpiry } = window.OpenPay.card

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
  const [state, setState] = useObjectState({})
  const [formState, setFormState] = useObjectState({ errors: [], message: null })

  const onAnyInputChange = event => {
    setState({ [event.target.name]: event.target.value })
    handleRemoveError(event.target.name)
  }

  const onPayClick = () => {
    const inputsEmpties = requires(state, ['year', 'month', 'number', 'cvv', 'name'])
    if (inputsEmpties) {
      return setFormState({ message: 'Todos los campos son requeridos', errors: inputsEmpties })
    }
    if (!validateCardNumber(state.number)) {
      return setFormState({
        errors: ['number'],
        message: 'El número de la tarjeta no es valido'
      })
    }
    if (!validateCVC(state.cvv)) {
      return setFormState({
        errors: ['cvv'],
        message: 'El código de seguridad no es válido'
      })
    }
    if (!validateExpiry(state.month, state.year)) {
      return setFormState({
        errors: ['month', 'year'],
        message: 'La fecha de vencimiento no es válida'
      })
    }
    handleProccessPayout()
  }

  const handleRemoveError = name => {
    if (!!formState.errors.length || formState.message) {
      const errors = formState.errors.filter(error => {
        if ((name === 'month' || name === 'year') && (error === 'month' || error === 'year')) return false
        return error !== name
      })
      const message = errors.length ? formState.message : null
      return setFormState({ errors, message })
    }
  }

  const handleProccessPayout = () => {
    const deviceSessionId = window.OpenPay.deviceData.setup()
    props.startProcess()
    window.OpenPay.token.create({
      card_number: state.number,
      holder_name: state.name,
      expiration_year: state.year,
      expiration_month: state.month,
      cvv2: state.cvv
    },
    async response => {
      const token = response.data.id
      const payStatus = await api.payouts.card({
        iva: '10',
        subtotal: props.totalPrice.toString(),
        method: 'card',
        deviceId: deviceSessionId,
        description: 'pago de compras',
        token,
        name: state.name,
        phone: props.data.number,
        mail: props.data.email,
        amount: props.totalPrice.toString()
      })
      console.log(payStatus)

      if (payStatus.error) {
        setFormState({ message: 'No se pudo realizar el pago, intentalo nuevamente con otro método de pago' })
        props.endProcess()
      } else {
        props.setSuccessMetadata(payStatus)
        props.saveOperation('payed', response)
      }
    },
    () => {
      setFormState({ message: 'Pago incorrecto, intentelo de nuevo' })
      props.endProcess()
    }
    )
  }

  return (
    <>
      <Row>
        {!!formState.message && (
          <Alert severity='error'>{formState.message || ''}</Alert>
        )}
      </Row>
      <Form id='credit_card_form'>
        <Row>
          <Input
            maxlength={80}
            state={state}
            onChange={onAnyInputChange}
            errors={formState.errors}
            name='name'
            placeholder='Nombre en la tarjeta'
          />
        </Row>
        <Row>
          <Input
            maxlength={16}
            state={state}
            onChange={onAnyInputChange}
            errors={formState.errors}
            name='number'
            filter='number'
            placeholder='16 Dígitos de la Tarjeta'
          />
        </Row>
        <Row>
          <Flex>
            <FlexItem>
              <SelectStyled
                type='select'
                onChange={onAnyInputChange}
                errors={formState.errors}
                name='month'
                state={state}
                options={months}
                placeholder='Mes'
              />
            </FlexItem>
            <FlexItem>
              <SelectStyled
                type='select'
                onChange={onAnyInputChange}
                errors={formState.errors}
                name='year'
                state={state}
                options={years}
                placeholder='Año'
              />
            </FlexItem>
            <FlexItem>
              <Input
                filter='number'
                maxlength={4}
                state={state}
                placeholder='CVV'
                name='cvv'
                onChange={onAnyInputChange}
                errors={formState.errors}
              />
            </FlexItem>
          </Flex>
        </Row>
        <Row>
          <Button onClick={onPayClick} variant='contained'>Pagar</Button>
        </Row>
        <input type='hidden' name='code' />
      </Form>
      <Button onClick={event => props.goToStep('Método de Pago')} variant='outlined'>Cambiar Método de pago</Button>
    </>
  )
}

CreditCard.propTypes = {
  saveOperation: func,
  startProcess: func,
  endProcess: func,
  goToStep: func,
  setSuccessMetadata: func,
  data: object,
  totalPrice: oneOfType([string, number])
}

export default CreditCard
