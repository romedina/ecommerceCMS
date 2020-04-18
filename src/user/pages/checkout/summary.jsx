/* eslint-disable react/jsx-handler-names */
import React from 'react'
import styled from 'styled-components'
import ItemOnCart from './item'
import { useDispatch, useSelector } from 'react-redux'
import { RemoveItem } from '../../../flux/cart'
import { Divider } from '@material-ui/core'
import { setAlert } from '../../../flux/alert'
import Currency from '../../../helpers/currency'
import ButtonBase from '../../components/button'
import propTypes from 'prop-types'

const Summary = props => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.cart)
  const subTotal = items.reduce((acumulator, currentItem) => { return acumulator + (currentItem.price * currentItem.quantity) }, 0)

  const handleRemoveItem = item => {
    dispatch(setAlert({
      title: 'Quitar item del carrito',
      message: '¿Estas seguro de quitar este item del carrito?',
      action: RemoveItem(item.id)
    }))
  }

  return (
    <Content>
      {items.map(item => (
        <ItemOnCart
          key={item.id}
          {...item}
          handleRemoveItem={handleRemoveItem}
        />
      ))}
      <Divider />
      <Group>
        <FlexBetween>
          <span>Subtotal:</span>
          $ {Currency.formatMoney(subTotal)}
        </FlexBetween>
        <FlexBetween>
          <span>Envio:</span>
          $ {Currency.formatMoney(props.shipping)}
        </FlexBetween>
      </Group>
      <Divider />
      <Group>
        <FlexBetween>
          <span>Total:</span>
          $ {Currency.formatMoney(props.shipping + subTotal)}
        </FlexBetween>
      </Group>
      <FlexBetween style={{ fontSize: '1rem' }}>
        {props.steps[props.currentStep] === 'Informacion' && (
          <Button to='/my-cart' variant='outlined'>Volver al carrito</Button>
        )}
        {props.steps[props.currentStep] === 'Envio' && (
          <Button handleClick={event => props.goToStep('Informacion')} variant='outlined'>Volver a Informacion</Button>
        )}
        {props.steps[props.currentStep] === 'Pago' && (
          <Button handleClick={event => props.goToStep('Envio')} variant='outlined'>Volver a Envio</Button>
        )}
        {(props.steps[props.currentStep] === 'Envio' || props.steps[props.currentStep] === 'Informacion') && (
          <Button handleClick={props.handleNext} variant='contained'>Continuar</Button>
        )}
        {props.steps[props.currentStep] === 'Pago' && (
          <Button handleClick={props.handleNext} variant='contained'>Pagar</Button>
        )}
      </FlexBetween>

    </Content>
  )
}

Summary.propTypes = {
  handleNext: propTypes.func,
  currentStep: propTypes.number,
  goToStep: propTypes.func,
  steps: propTypes.array,
  handlePay: propTypes.func,
  shipping: propTypes.number
}

const Content = styled.div`
  max-width: 450px;
  margin: auto;
`
const Group = styled.div`
  padding: 20px 0px;
`
const Button = styled(ButtonBase)`
  font-size: 1em;
  max-width: 190px;
  padding-top: 15px;
  padding-bottom: 15px;
`
const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.3em;
  font-weight: bold;
  & span {
    color: var(--user-gray)
  }
`

export default Summary
