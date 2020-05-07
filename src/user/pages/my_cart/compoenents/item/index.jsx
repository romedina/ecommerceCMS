import React from 'react'
import propTypes from 'prop-types'
import { Content, PictureContent, PictureContentHead, DeleteIcon, DeleteIconHeder, DataContent, Picture, DescribeQuiantity, Title, Price, QuantityControls } from './styled'
import InputQuantity from '../../../../components/input_quantity'
import Currency from '../../../../../helpers/currency'
import Responsive from '../../../../../components/responsive'

const ItemOnCart = (props) => {
  const onQuantityChange = event => {
    props.handleChangeQuantity(props, parseInt(event.target.value))
  }

  const handleQuantityChange = value => {
    props.handleChangeQuantity(props, value)
  }

  if (props.header) {
    return (
      <Responsive rule='min-width:850px'>
        <Content style={{ border: 'none', color: 'gray', background: 'none' }}>
          <PictureContentHead />
          <DataContent>
            <Title>Producto</Title>
            <Price>Precio</Price>
            <QuantityControls>
              Cantidad
            </QuantityControls>
          </DataContent>
          <DeleteIconHeder />
        </Content>
      </Responsive>
    )
  }

  return (
    <Content>
      <PictureContent>
        <Picture src={props.picture} />
      </PictureContent>
      <DataContent>
        <Title>{props.title}</Title>
        <Price>$ {Currency.formatMoney(props.price)}</Price>
        <QuantityControls>
          <Responsive rule='min-width:851px'>
            <InputQuantity
              onQuantityChange={onQuantityChange}
              quantity={props.quantity}
              setQuantity={handleQuantityChange}
            />
          </Responsive>
          <Responsive rule='max-width:850px'>
            <DescribeQuiantity>Cantidad:</DescribeQuiantity>
            <span>{props.quantity}</span>
          </Responsive>
        </QuantityControls>
      </DataContent>
      <DeleteIcon
        onClick={event => props.handleRemoveItem(props)}
      />
    </Content>
  )
}

ItemOnCart.propTypes = {
  price: propTypes.number,
  title: propTypes.string,
  picture: propTypes.string,
  quantity: propTypes.oneOfType([propTypes.number, propTypes.string]),
  handleRemoveItem: propTypes.func,
  handleChangeQuantity: propTypes.func,
  header: propTypes.bool
}

export default ItemOnCart
