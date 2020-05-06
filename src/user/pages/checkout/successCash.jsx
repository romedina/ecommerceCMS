import React from 'react'
import styled from 'styled-components'
import HeaderSuccess from './components/success'
import TicketStore from './components/store_ticket'

const successStore = props => {
  return (
    <Content>
      <HeaderSuccess />
      <TicketStore {...props} />
    </Content>
  )
}

const Content = styled.div`
  max-width: 800px;
  margin: auto;
`
export default successStore
