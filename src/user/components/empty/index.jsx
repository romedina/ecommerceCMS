import React from 'react'
import { Content, Text, Icon } from './styled'
import { string, element } from 'prop-types'

const Empty = props => {
  return (
    <Content>
      {props.icon && (<Icon as={props.icon} />)}
      {!props.icon && (<Icon />)}
      <Text>
        {props.message || 'Aún no tienes artículos en tu carrito'}
      </Text>
    </Content>
  )
}

Empty.propTypes = {
  message: string,
  icon: element
}

export default Empty
