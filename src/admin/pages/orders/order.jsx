import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'
import ButtonBase from '../../../components/link'
import { toString } from '../../../helpers/date'

const Order = props => {
  return (
    <Wrapper>
      <Content isViewed={props.isViewed}>
        <Date>{toString(props.date.toDate())}</Date>
        <Email>{props.user.email}</Email>
        <NoOrden>
          <div>Id de orden</div>
          {props.id}
        </NoOrden>
        <Status>
          Estado:
          {props.status === 'payed' && (<Payed>Pagado</Payed>)}
          {props.status === 'pending' && (<Peding>Pago pendiente</Peding>)}
          {props.status === 'sent' && (<Sent>Enviado</Sent>)}
          {props.status === 'cancelled' && (<Cancelled>Cancelado</Cancelled>)}
        </Status>
      </Content>
      <Button to={`/order/${props.period}/${props.id}`}>
        Ver pedido
      </Button>
    </Wrapper>
  )
}
Order.propTypes = {
  user: propTypes.object,
  id: propTypes.string,
  status: propTypes.string,
  date: propTypes.object,
  period: propTypes.string,
  isViewed: propTypes.bool
}

const Content = styled.div`
  border: 1px solid var(--main-blue);
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  font-size: 1.1em;
  overflow: hidden;
  background: ${props => props.isViewed ? '' : '#008ffd0f'};
`
const Wrapper = styled.div`
  width: 33.3%;
  padding: 20px;
  @media screen and (max-width:1200px){ padding: 5px}
  @media screen and (max-width:1000px){ width: 50% }
  @media screen and (max-width:550px){ 
    width: 100%;
    max-width: 400px;
    margin: auto;
  }
`
const Date = styled.div`
  color: var(--main-blue-dark);
  text-align: center;
  padding: 10px 0px;
  font-weight: bold;
`
const Email = styled.div`
  font-size: 1.1em;
  font-weight: bold;
  padding: 10px 0px;
  overflow: hidden;
`
const NoOrden = styled.div`
  font-size: 1.1em;
  font-weight: bold;
  padding: 10px 0px;
  & div {
    color: gray;
  }
`
const Status = styled.div`
  display: flex;
  justify-content: center;
  
`
const Payed = styled.div`
  color: green;
  margin-left: 10px;
  font-weight: bold;
`

const Peding = styled(Payed)`
  color: orange;
`
const Cancelled = styled(Payed)`
  color: red;
`
const Sent = styled(Payed)`
  color: var(--main-blue);
`

const Button = styled(ButtonBase)`
  padding: 7px 0px;
  text-align: center;
  cursor: pointer;
  background: var(--main-blue);
  width: 100%;
  border-radius: 5px;
  color: #fff;
  margin-top: 10px;
  font-size: 1.1em;
  font-weight: bold;
`
export default Order
