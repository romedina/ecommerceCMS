import React from 'react'
import Layout from '../../components/layout_user'
import { useSelector, useDispatch } from 'react-redux'
import ContainerBase from '../../components/container'
import Item from './item'
import styled from 'styled-components'
import { updateQuantity, RemoveItem } from '../../../flux/cart'
import { setAlert } from '../../../flux/alert'
import Currency from '../../../helpers/currency'
import Button from '../../components/button'
import sumePrice from '../../../helpers/sumPrice'

const MyCart = props => {
  const myCart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const subtotal = sumePrice(myCart)
  const shipping = 50
  const total = subtotal + shipping

  const handleRemoveItem = data => {
    dispatch(
      setAlert({
        title: 'Quitar item del carrito',
        message: '¿ Estas seguro de quitar este item de tu carrito ?',
        action: RemoveItem(data.id)
      })
    )
  }

  const handleChangeQuantity = (item, quantity) => {
    if (quantity === 0) return false
    dispatch(updateQuantity({
      id: item.id,
      quantity
    }))
  }

  return (
    <Layout>
      <Container>
        <Item header />
        {myCart.map(item => (
          <Item
            handleRemoveItem={handleRemoveItem}
            handleChangeQuantity={handleChangeQuantity}
            key={item.id}
            {...item}
          />
        ))}
        <FlexEnd>
          <Summary>
            <div>
              <span>Subtotal:</span>
              $ {Currency.formatMoney(subtotal)}
            </div>
            <div>
              <span>Envio:</span>
              $ {Currency.formatMoney(shipping)}
            </div>
          </Summary>
        </FlexEnd>
        <FlexEnd>
          <Total>
            <div>
              <span>Total:</span>
              $ {Currency.formatMoney(total)}
            </div>
          </Total>
        </FlexEnd>
        <ButtonContainer>
          <ButtonStyled to='/' as={Button} variant='outlined'>Seguir comprando</ButtonStyled>
          <ButtonStyled to='/checkout' as={Button} variant='contained'>Continuar</ButtonStyled>
        </ButtonContainer>
      </Container>
    </Layout>
  )
}

const FlexEnd = styled.div`
  display: flex;
  justify-content: flex-end;
`
const Summary = styled.div`
  background: var(--user-gray-light);
  padding: 10px;
  border-radius: 10px;
  width: 300px;
  font-size: 1.3em;
  font-weight: bold;
  text-align: right;
  & span {
    font-weight: normal;
    color: var(--user-gray);
    margin-right: 10px;
  }
  @media screen and (max-width:400px) {width: 100%}
`
const Total = styled.div`
  margin-top: 10px;
  background: var(--user-black-light);
  padding: 10px;
  border-radius: 10px;
  width: 300px;
  font-size: 1.3em;
  font-weight: bold;
  text-align: right;
  & span {
    font-weight: normal;
    color: var(--user-gray);
    margin-right: 10px;
  }
  @media screen and (max-width:400px) {width: 100%}
`
const Container = styled(ContainerBase)`
  max-width: 1000px;
`
const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`
const ButtonStyled = styled.div`
  max-width:180px;
  padding-top: 15px;
  padding-bottom: 15px;
`

export default MyCart
