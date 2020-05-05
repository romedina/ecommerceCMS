import React from 'react'
import styled from 'styled-components'
import InputBase from '../../../components/inputs/GroupInput'
import useObjectState from '../../../hooks/useObjectState'
import Button from '../../../components/inputs/Button'
import { Alert } from '@material-ui/lab'
import { requires } from '../../../helpers/validateform'
import { Fade } from '@material-ui/core'
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
    window.OpenPay.token.create(
      {
        card_number: state.number,
        holder_name: state.name,
        expiration_year: state.year,
        expiration_month: state.month,
        cvv2: state.cvv
      },
      response => {
        const token = response.data.id
        console.log(token)
        window.alert('created token', token)
      },
      response => setFormState({ message: 'Pago incorrecto, intentelo de nuevo' })
    )
  }

  return (
    <>
      <Row>
        <Fade in={!!formState.message}>
          <div>
            <Alert severity='error'>{formState.message || ''}</Alert>
          </div>
        </Fade>
      </Row>
      <Form>
        <Row>
          <Input
            state={state}
            onChange={onAnyInputChange}
            errors={formState.errors}
            name='name'
            placeholder='Nombre en la tarjeta'
          />
        </Row>
        <Row>
          <Input
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
          <Button onClick={onPayClick} variant='contained' fullWidth>Pagar</Button>
        </Row>
      </Form>
    </>
  )
}
const SelectStyled = styled(InputBase)`
  margin-right: 10px;
`
const Row = styled.div`
  margin-bottom: 15px;
`
const Form = styled.div`
  padding: 20px;
  background-color: var(--user-gray-light);
  border-radius: 5px;
`
const Input = styled(InputBase)`

`
const Flex = styled.div`
  display: flex;
  justify-content: center;
`
const FlexItem = styled.div`
  width: 33%;
`

export default CreditCard
