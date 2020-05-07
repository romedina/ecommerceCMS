import React from 'react'
import { Content, Text, Icon } from './styled'

const Empty = props => {
  return (
    <Content>
      <Icon />
      <Text>
        Aún no tienes artículos en tu carrito
      </Text>
    </Content>
  )
}

export default Empty
