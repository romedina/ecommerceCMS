import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import React from 'react'
import styled from 'styled-components'
import { Paper } from '@material-ui/core'

const Success = props => {
  return (
    <Content elevation={2}>
      <Header>
        <CheckCircleOutlineIcon />
      </Header>
      <Body>
        Gracias por contactar con nosotros, Hemos recibido tu mensaje
      </Body>
    </Content>
  )
}

const Content = styled(Paper)`
  max-width: 500px;
  border-radius: 10px;
  width: 500px;
  overflow: hidden;
  text-align: center;
  font-size: 1.5em;
`

const Header = styled.div`
  background: #3fc59d;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0px;
  & svg {
    color: #fff;
    font-size: 100px;
  }
`
const Body = styled.div`
  padding: 60px 10px;
  color: #3fc59d;
`

export default Success
