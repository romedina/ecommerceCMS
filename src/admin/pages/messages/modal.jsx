/* eslint-disable react/jsx-handler-names */
import React from 'react'
import { Modal } from '@material-ui/core'
import styled from 'styled-components'
import propTypes from 'prop-types'

const ModalComponent = props => {
  const data = props.itemSelected || {}
  const date = props.itemSelected ? props.itemSelected.date.toDate() : new Date()

  return (
    <ModalStyled open={!!props.itemSelected} onClose={props.hiddeMessage}>
      <Content>
        <Row>
          <span>Nombre: </span>
          <Name>{data.name || ''}</Name>
        </Row>
        <Row>
          <span>Correo: </span>{data.email || ''}
        </Row>
        <Row>
          <span>Number: </span>{data.number || ''}
        </Row>
        <Row>
          <span>Ciudad o estado: </span>{data.city_or_state || ''}
        </Row>
        <Row>
          <span>Fecha: </span> {date.getDate()}-{date.getMonth() + 1}-{date.getFullYear()}
        </Row>
        <Message>
          <span>Mensaje: </span> {data.content || ''}
        </Message>
      </Content>
    </ModalStyled>
  )
}

ModalComponent.propTypes = {
  itemSelected: propTypes.object,
  hiddeMessage: propTypes.func
}

const ModalStyled = styled(Modal)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  outline: 0;
`

const Content = styled.div`
  background: #fff;
  max-width: 500px;
  min-height: 400px;
  margin: auto;
  padding: 20px;
  border-radius: 10px;
  outline: 0;
`
const Name = styled.h4`
  margin: 0px;
`
const Row = styled.div`
  display: flex;
  align-items:flex-start;
  flex-wrap: wrap;
  & span {
    margin-right: 10px;
    color: var(--main-blue);
    font-weight: bold;
  }
`
const Message = styled(Row)`
  margin-top: 15px;
`

export default ModalComponent
