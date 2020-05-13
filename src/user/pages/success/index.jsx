import React from 'react'
import styled from 'styled-components'
import HeaderSuccess from './components/success'
import TicketStore from './components/store_ticket'
import Spei from './components/instructions_spei'
import Container from '../../components/container'
import { useLocation, Redirect } from 'react-router-dom'
import Layout from '../../components/layout_user'
import Payed from './components/payed'

const Success = props => {
  var { state = {} } = useLocation()
  console.log('state', state)

  if (state.methodPay === 'PayPal' || state.methodPay === 'card') {
    return (
      <Layout>
        <HeaderSuccess />
        <Container>
          <Content>
            <Payed />
          </Content>
        </Container>
      </Layout>
    )
  }
  if (state.methodPay === 'card') return 'cardSuccess'

  if (state.methodPay === 'cash') {
    return (
      <Layout>
        <HeaderSuccess message='Ahora solo sigue las intrucciones para realizar el pago.' />
        <Container>
          <Content>
            <TicketStore {...state} />
          </Content>
        </Container>
      </Layout>
    )
  }

  if (state.methodPay === 'spei') {
    return (
      <Layout>
        <HeaderSuccess message='Ahora solo sigue las intrucciones para realizar el pago.' />
        <Container>
          <Content>
            <Spei {...state} />
          </Content>
        </Container>
      </Layout>
    )
  }
  return (<Redirect to='/error-404' />)
}

const Content = styled.div`
  max-width: 800px;
  margin: auto;
`
export default Success
