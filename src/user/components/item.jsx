import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import Link from '../../components/link'

const Item = (props) => {
  return (
    <WrapperItem to={`/item/${props.id}`}>
      <ItemBody>
        <Picture src={props.picture} />
        <Data>
          <Title>{props.title}</Title>
          <Price> $ {props.price}</Price>
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
  width: 20%;
  padding: 7px;
  height: 100%;
  @media screen and (max-width:1200px) {
    width: 25%;
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

const ItemBody = styled.div`
  background: #fff;
  min-height: 150px;
  border-radius: 5px;
  overflow: hidden;
  height: 100%;
  border: 1px solid var(--user-gray-light);
`
const Picture = styled.img`
  width: 100%;
  display: block;
  height: 180px;
  object-fit: cover;
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
  padding: 10px;
`
export default Item
