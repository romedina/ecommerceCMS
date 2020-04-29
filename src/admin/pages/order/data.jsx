import React from 'react'
import styled from 'styled-components'
import currency from '../../../helpers/currency'
import { number } from 'prop-types'

const Data = props => {
  return (
    <Content>
      <div className='rows'>
        <span>Subtotal:</span>
        $ {currency.formatMoney(props.subTotal)}
      </div>
      <div className='rows'>
        <span>Envío:</span>
        $ {currency.formatMoney(props.shipping)}
      </div>
      <Button>Total $ {currency.formatMoney(props.totalPrice)}</Button>
    </Content>
  )
}

Data.propTypes = {
  totalPrice: number,
  subTotal: number,
  shipping: number
}

const Content = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  padding: 20px 0px;
  & .rows {
    margin-bottom: 10px;
    width: 100%;
    text-align: right;
    font-size: 1.1em;
    font-weight: bold;
    & span {
      font-weight: normal;
      color: gray;
      margin-right: 15px;
    }
  }
`
const Button = styled.div`
  text-align: center;
  min-width: 200px;
  border: 1px solid #0792fd;
  padding: 10px;
  border-radius: 5px;
  color: #1e9cfd;
  cursor: pointer;
  background: var(--main-blue-dark);
  font-size: 1.2em;
  color: #fff;
  border: none;
`
export default Data
