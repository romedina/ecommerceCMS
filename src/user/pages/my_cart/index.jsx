import React from 'react'
import Layout from '../../components/layout_user'
import { useSelector, useDispatch } from 'react-redux'
import { FlexEnd, Summary, Total, Container, ButtonContainer, ButtonStyled } from './styled'
import Item from './compoenents/item'
import { updateQuantity, RemoveItem } from '../../../flux/cart'
import { setAlert } from '../../../flux/alert'
import Currency from '../../../helpers/currency'
import Button from '../../../components/inputs/Button'
import sumePrice from '../../../helpers/sumPrice'
import Empty from './compoenents/empty'

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
      {!!myCart.length && (
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
      )}
      {!myCart.length && (
        <Container>
          <Empty />
        </Container>
      )}
    </Layout>
  )
}

export default MyCart
