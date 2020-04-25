import React from 'react'
import styled from 'styled-components'
import { object, string } from 'prop-types'

const User = props => {
  return (
    <Content>
      <DividerStyled />
      <SubTitle>Datos del cliente</SubTitle>
      <Row>
        <Describe>Nombre:</Describe>
        <Value>{props.user.name} {props.user.lastname}</Value>
      </Row>
      <Row>
        <Describe>Correo:</Describe>
        <Value>{props.user.email}</Value>
      </Row>
      <Row>
        <Describe>Número de contacto:</Describe>
        <Value>{props.user.number}</Value>
      </Row>
      <Row>
        <Describe>Método de pago:</Describe>
        <Value>{props.methodPay}</Value>
      </Row>
      <DividerStyled />
      <SubTitle>Datos de Envío</SubTitle>
      <Row>
        <Describe>Estado:</Describe>
        <Value>{props.shipTo.state}</Value>
      </Row>
      <Row>
        <Describe>Ciudad:</Describe>
        <Value>{props.shipTo.city}</Value>
      </Row>
      <Row>
        <Describe>Colonia:</Describe>
        <Value>{props.shipTo.suburb}</Value>
      </Row>
      <Row>
        <Describe>Código postal:</Describe>
        <Value>{props.shipTo.postal_code}</Value>
      </Row>
      <Row>
        <Describe>Calle y número:</Describe>
        <Value>{props.shipTo.street_number}</Value>
      </Row>
      <DividerStyled />
    </Content>
  )
}

User.propTypes = {
  user: object,
  methodPay: string,
  shipTo: object
}

const Content = styled.div`
  font-size: 1.1em;
  @media screen and (max-width:500px) { font-size: 1em; }
`
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Describe = styled.div`
  color: var(--main-blue-dark);
  margin-right: 20px;
`
const Value = styled.div`
  font-weight: bold;
`
const SubTitle = styled.div`
  font-size: 1.1em;
  color: var(--main-blue);
`
const DividerStyled = styled('hr')`
  height: 1px;
  margin: 10px 0px;
  color: var(--main-blue-dark);
  border-color: var(--main-blue-dark);
`
export default User
