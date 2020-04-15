import React from 'react'
import styled from 'styled-components'
import Picture from './picture'
import propTypes from 'prop-types'
import { Divider } from '@material-ui/core'
import ButtonBase from '../../../components/link'

const Data = props => {
  return (
    <Flex>
      <PictureBox>
        <Picture
          pictures={[props.picture, ...props.pictures]}
        />
      </PictureBox>
      <DataBox>
        <Header>
          <Title>{props.title}</Title>
          <Price>{props.price}</Price>
        </Header>
        <Divider />
        <Description>
          <div>Descripcion</div>
          {props.description}
        </Description>
        <Divider />
        <Cuantity>
          Cantidad:
          <FormContainer>
            <div onClick={evenet => props.setQuantity(props.quantity < 1 ? 1 : props.quantity - 1)}>-</div>
            <div>
              <input
                type='text'
                value={props.quantity}
                onChange={props.onQuantityChange}
              />
            </div>
            <div onClick={evenet => props.setQuantity(props.quantity + 1)}>+</div>
          </FormContainer>
        </Cuantity>
        <ButtonContainer>
          <Button to='/' variant='outlined'>Seguir comprando</Button>
          {!props.isThisInMyCart && (
            <Button handleClick={props.AddToCart} variant='contained'>Agregar al carrito</Button>
          )}
          {props.isThisInMyCart && (
            <Button handleClick={props.removeFromMyCart} variant='contained'>Quitar al carrito</Button>
          )}
        </ButtonContainer>
      </DataBox>
    </Flex>
  )
}

Data.propTypes = {
  picture: propTypes.string,
  pictures: propTypes.array,
  description: propTypes.string,
  price: propTypes.number,
  title: propTypes.string,
  AddToCart: propTypes.func,
  onQuantityChange: propTypes.func,
  quantity: propTypes.oneOfType([propTypes.number, propTypes.string]),
  setQuantity: propTypes.func,
  isThisInMyCart: propTypes.bool,
  removeFromMyCart: propTypes.func
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;
`
const Button = styled(ButtonBase)`
  width: 48%;
  font-size: 1.2em;
  padding: 10px 0px;
  border-radius: 5px;
  color: ${props => props.variant === 'contained' ? '#fff' : 'initial'};
  border: ${props => props.variant === 'contained' ? '' : '1px solid var(--user-gray-light)'};
  background: ${props => props.variant === 'contained' ? 'var(--user-black)' : 'none'};
  @media screen and (max-width:700px) {
    font-size: 1em;
  }
`

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width:700px) {
    max-width: 550px;
    margin: auto;
  }
`
const PictureBox = styled.div`
  padding: 10px;
  width: 60%;
  @media screen and (max-width:900px) {
    width: 50%
  }
  @media screen and (max-width:700px) {
    width: 100%
  }
`
const DataBox = styled.div`
  padding: 10px;
  width: 40%;
  @media screen and (max-width:900px) {
    width: 50%
  }
  @media screen and (max-width:700px) {
    width: 100%
  }
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Title = styled.h1`
  margin-right: 20px;

`
const Price = styled.h1`
  
`
const Description = styled.div`
  font-size: 1.2em;
  padding: 10px 0px;
  & div {
    color: var(--user-gray);
    font-weight: bold;
    margin-bottom: 10px;
  }
`
const Cuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.7em;
  font-weight: bold;
  padding: 10px 0px;
`
const FormContainer = styled.div`
  background: var(--user-gray-light);
  width: 150px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  & div {
    width: 33%;
    text-align: center;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  & input {
    width: 100%;
    height: 100%;
    outline: none;
    text-align: center;
    font-size: 1em;
    background: initial;
    border: none;
  }
`
export default Data
