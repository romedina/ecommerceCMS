import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'
import InputQuantity from '../../components/input_quantity'
import Currency from '../../../helpers/currency'
import Responsive from '../../../components/responsive'

const ItemOnCart = (props) => {
  const onQuantityChange = event => {
    props.handleChangeQuantity(props, parseInt(event.target.value))
  }

  const handleQuantityChange = value => {
    props.handleChangeQuantity(props, value)
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
  handleChangeQuantity: propTypes.func
}

const Content = styled.div`
  align-items: center;
  display: flex;
  padding: 10px;
  margin: 5px 0px;
  border-radius: 5px;
  border: 1px solid var(--user-gray-light);
  justify-content: space-between;
  font-size: 1.2em;
  font-weight: bold;
  @media screen and (max-width:600px){
    font-size: 1em;
  }
`

const PictureContent = styled.div`
  background: red;
  width: 120px;
  height: 120px;
  min-width: 120px;
  min-height: 120px;
`
const DeleteIcon = styled(DeleteOutlinedIcon)`
  background: red;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  min-width: 30px;
  min-height: 30px;
  color: #fff;
  padding: 5px;
  cursor: pointer;
`
const DataContent = styled.div`
  width: 100%;
  margin: 0px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width:600px){
    flex-wrap: wrap;
    margin: 0px;
  }
`
const Picture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const DescribeQuiantity = styled.span`
  display: none;
  @media screen and (max-width:600px){
    display: inline;
    margin-right: 10px;
  }
`

const Title = styled.div`
  width:50%;
  padding-left: 10px;
  @media screen and (max-width:850px){
    width: 60%;
  }
  @media screen and (max-width:600px){
    width: 100%;
    margin-bottom: 8px;
  }
`
const Price = styled.div`
  width:20%;
  padding-left: 10px;
  @media screen and (max-width:850px){
    width: 30%;
  }
  @media screen and (max-width:600px){
    width: 100%;
    font-weight: normal;
  }
`
const QuantityControls = styled.div`
  width:30%;
  padding-left: 10px;
  @media screen and (max-width:850px){
    width: 10%;
  }
  @media screen and (max-width:600px){
    width: 100%;
    font-weight: normal;
  }
`

export default ItemOnCart
