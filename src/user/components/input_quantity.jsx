import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'

const InputQuantity = props => {
  return (
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
  )
}

InputQuantity.propTypes = {
  setQuantity: propTypes.func,
  onQuantityChange: propTypes.func,
  quantity: propTypes.number
}

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

export default InputQuantity
