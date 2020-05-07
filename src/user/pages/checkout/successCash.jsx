import React from 'react'
import styled from 'styled-components'
import HeaderSuccess from './components/success'
import TicketStore from './components/store_ticket'
import Container from '../../components/container'

const successStore = props => {
  return (
    <>
      <HeaderSuccess />
      <Container>
        <Content>
          <TicketStore {...props} />
        </Content>
      </Container>
    </>
  )
}

const Content = styled.div`
  max-width: 800px;
  margin: auto;
`
export default successStore
