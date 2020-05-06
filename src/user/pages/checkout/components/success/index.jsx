import React from 'react'
import { Content, Title, Icon, Message } from './styled'

const Success = props => {
  return (
    <Content>
      <Title>
        Gracias por tu compra.
      </Title>
      <Icon />
      <Message>
        Ahora solo sigue las intrucciones para realizar el pago.
      </Message>
    </Content>
  )
}

export default Success
