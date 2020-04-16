import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'
import Currency from '../../../helpers/currency'
import { DeleteOutline } from '@material-ui/icons'

const Item = props => {
  return (
    <Content>
      <PictureContent>
        <QuantityFloat>
          {props.quantity}
        </QuantityFloat>
        <Picture src={props.picture} />
      </PictureContent>
      <Data>
        <Title>{props.title}</Title>
        <Price>$ {Currency.formatMoney(props.price)}</Price>
      </Data>
      <DeleteIcon
        onClick={event => props.handleRemoveItem(props)}
      />
    </Content>
  )
}

Item.propTypes = {
  picture: propTypes.string,
  title: propTypes.string,
  price: propTypes.oneOfType([propTypes.number, propTypes.string]),
  handleRemoveItem: propTypes.func,
  quantity: propTypes.number
}

const Title = styled.div`
  width: 70%;
  margin-right: 10px;
`
const Price = styled.div`
  width: 30%;
`
const Data = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-weight: bold;
  @media screen and (max-width: 400px){
    flex-wrap: wrap;
  }
`
const DeleteIcon = styled(DeleteOutline)`
  background: red;
  border-radius: 50%;
  margin-right: 10px;
  color: #fff;
  cursor: pointer;
`

const Content = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`
const PictureContent = styled.div`
  width: 80px;
  min-width: 80px;
  height: 80px;
  margin-right: 10px;
  position: relative;
`
const Picture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`
const QuantityFloat = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;
  z-index: 2;
  background: var(--user-black);
  color: var(--user-primary);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export default Item
