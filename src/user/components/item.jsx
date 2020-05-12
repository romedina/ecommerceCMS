import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import currency from '../../helpers/currency'
import { ButtonBase } from '@material-ui/core'

const Item = (props) => {
  return (
    <WrapperItem to={`/item/${props.id}`}>
      <ItemBody>
        <Picture src={props.picture} />
        <Data>
          <Title>{props.title}</Title>
          <Price> $ {currency.formatMoney(props.price)}</Price>
        </Data>
      </ItemBody>
    </WrapperItem>
  )
}

Item.propTypes = {
  id: propTypes.string,
  picture: propTypes.string,
  title: propTypes.string,
  price: propTypes.number
}

const WrapperItem = styled(Link)`
  width: 25%;
  display: block;
  padding: 10px;
  color: inherit;
  text-decoration: none;
  box-sizing: border-box;
  @media screen and (max-width:1200px) {
    padding: 7px;
  }
  @media screen and (max-width:850px) {
    width: 33.3%;
  }
  @media screen and (max-width:650px) {
    width: 50%;
  }
  @media screen and (max-width:400px) {
    width: 100%;
  }
`

const ItemBody = styled(ButtonBase)`
  background: #fff;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transition: all 300ms;
  &:hover {
    transform: scale(1.01);
    box-shadow: 2px 2px 10px gray;
  }
`
const Picture = styled.img`
  width: 100%;
  display: block;
  height: 250px;
  object-fit: cover;
  border-bottom: 1px solid #cdcdcd;
  @media screen and (max-width:960px){
    height: 200px;
  }
  @media screen and (max-width:500px){
    height: 150px;
  }
  @media screen and (max-width:400px){
    height: 250px;
  }
`
const Title = styled.h2`
  color: var(--user-black);
  padding: 0px;
  margin: 0px;
  text-align: left;
  margin-bottom: 10px;
  font-size: 1.2em;
`
const Price = styled.div`
  color: var(--user-black);
  font-size: 1.3em;
  text-align: left;
  font-size: bold;
`
const Data = styled.div`
  padding: 15px;
  width: 100%;
`
export default Item
