import React from 'react'
import { Content, Text, Icon } from './styled'
import { string } from 'prop-types'

const Empty = props => {
  return (
    <Content>
      <Icon />
      <Text>
        {props.message || 'Aún no tienes artículos en tu carrito'}
      </Text>
    </Content>
  )
}

Empty.propTypes = {
  message: string
}

export default Empty
