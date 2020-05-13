import React from 'react'
import { Content, Title, Icon, Message } from './styled'
import { string } from 'prop-types'

const Success = props => {
  return (
    <Content>
      <Icon />
      <Title>
        Gracias por tu compra.
      </Title>
      {props.message && (
        <Message>
          {props.message}
        </Message>
      )}
    </Content>
  )
}

Success.propTypes = {
  message: string
}

export default Success
