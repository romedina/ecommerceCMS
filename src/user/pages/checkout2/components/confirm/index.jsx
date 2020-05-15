import React from 'react'
import { Content, Title, Row, Icon, Describe, Edit } from './styled'
import { RoomOutlined, AttachMoney } from '@material-ui/icons'
import { object, func } from 'prop-types'
import { methodPayEs } from '../../../../../constants'

const Confirm = props => {
  return (
    <Content>
      <Title>Datos de envio</Title>
      <Row>
        <Icon as={RoomOutlined} />
        <Describe>
          {`${props.data.name} 
            ${props.data.lastname}, 
            ${props.data.street_number}, 
            ${props.data.suburb}, 
            ${props.data.city}, 
            ${props.data.postal_code}`}
        </Describe>
        <Edit onClick={props.goToStep(0)}>Modificar</Edit>
      </Row>
      <Title>Método de pago</Title>
      <Row>
        <Icon as={AttachMoney} />
        <Describe>
          <Title>{methodPayEs[props.data.methodPay]}</Title>
        </Describe>
        <Edit onClick={props.goToStep(1)}>Modificar</Edit>
      </Row>
    </Content>
  )
}

Confirm.propTypes = {
  data: object,
  goToStep: func
}

export default Confirm
