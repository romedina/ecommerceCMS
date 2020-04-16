import React from 'react'
import Section from './Sections'
import styled from 'styled-components'
import propTypes from 'prop-types'

const Shipping = props => {
  return (
    <Section {...props}>
      <Row>
        <span>Contacto:</span>
        {props.data.email}
      </Row>
      <Row>
        <span>Enviar a:</span>
        {`${props.data.name} ${props.data.lastname}, ${props.data.street_number}, ${props.data.suburb}, ${props.data.city}, ${props.data.postal_code}`}
      </Row>
      <ChangeOption onClick={props.handleChangeDirections}>
        Cambiar
      </ChangeOption>
    </Section>
  )
}

Shipping.propTypes = {
  data: propTypes.object,
  handleChangeDirections: propTypes.func
}

const Row = styled.div`
  background: var(--user-gray-light);
  padding: 10px;
  border-radius: 5px;
  font-weight: bold;
  color: black;
  margin-bottom: 15px;
  & span {
    color: var(--user-gray);
    margin-right: 15px;
  }
`
const ChangeOption = styled.div`
  color: var(--user-gray);
  display: flex;
  justify-content: flex-end;
  font-size: 1.1em;
  cursor: pointer;
`

export default Shipping
