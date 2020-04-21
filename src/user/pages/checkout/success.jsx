import React from 'react'
import styled from 'styled-components'
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined'

const SuccessPaypal = props => {
  return (
    <Content>
      <Icon />
      <Title>Gracias por tu compra</Title>
      <Text>Te enviaremos un correo Electronico con tu numero de guia</Text>
    </Content>
  )
}
const Content = styled.div`
  display: flex;
  justify-content: center;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  flex-direction: column;
  color: var(--user-gray);
`
const Icon = styled(CheckCircleOutlinedIcon)`
  font-size: 150px;
  color: #39b54a;
  margin-bottom: 20px;
`
const Title = styled.div`
  font-size: 1.8em;
`
const Text = styled.div`
  font-size: 1.2em;
  text-align: center;
`
export default SuccessPaypal
