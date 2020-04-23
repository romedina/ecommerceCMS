import React from 'react'
import styled from 'styled-components'
import { string, number, oneOfType } from 'prop-types'
import CurrencyParser from '../../../helpers/currency'

const Item = props => {
  return (
    <Content>
      <Picture src={props.picture} />
      <Data>
        <Title>{props.title}</Title>
        <Quantity>
          <span>Cantidad: </span>
          {props.quantity}
        </Quantity>
        <Price>
          <span>Precio</span>
          $ {CurrencyParser.formatMoney(props.price)}
        </Price>
      </Data>
    </Content>
  )
}

Item.propTypes = {
  picture: string,
  price: oneOfType([string, number]),
  quantity: number,
  title: string
}

const Content = styled('div')`
  margin: auto;
  margin-bottom: 10px;
  box-shadow: 2px 2px 5px #0e3f6782;
  display: flex;
  font-size: 1.1em;
  align-items: center;
`
const Picture = styled.img`
  width: 200px;
  height: 150px;
  min-width: 200px;
  min-height: 150px;
  object-fit: cover;
  @media screen  and (max-width:500px){
    width: 100px;
    height: 100px;
    min-width: 100px;
    min-height: 100px;
  }
`
const Data = styled.div`
  width: 100%;
  padding: 10px;
`
const Title = styled.h4`
  color: var(--main-blue);
  margin: 0px;
  margin-bottom: 10px;
`
const Quantity = styled.div`
  & span {
    color: gray;
    margin-right: 10px;
  }
`
const Price = styled.div`
  & span {
    color: gray;
    margin-right: 10px;
  }
`
export default Item
