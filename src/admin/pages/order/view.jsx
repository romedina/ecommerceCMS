import React, { useState } from 'react'
import Layout from '../../components/layout_admin'
import Skeleton from './skeleton'
import { bool, array, string } from 'prop-types'
import Item from './item'
import styled from 'styled-components'
import User from './user'
import Data from './data'
import EditIcon from '@material-ui/icons/Edit'
import { ButtonBase } from '@material-ui/core'
import Dialog from './dialog'

const View = props => {
  const [isDialogOpen, setDialogOpen] = useState(false)

  return (
    <Layout>
      {props.loading && (
        <Skeleton />
      )}
      {!props.loading && (
        <Content>
          <FlexHeader>
            <Dialog open={isDialogOpen} onClose={event => setDialogOpen(false)} {...props} />
            <Title>Articulos</Title>
            <StateContent onClick={event => setDialogOpen(true)}>
              <span>Estado: </span>
              {props.status === 'payed' && (<Payed> <EditIcon /> Pagado</Payed>)}
              {props.status === 'pending' && (<Pending> <EditIcon /> Pago pendiente</Pending>)}
              {props.status === 'cancelled' && (<Cancelled> <EditIcon /> Cancelado</Cancelled>)}
              {props.status === 'sent' && (<Sent> <EditIcon /> Enviado</Sent>)}
            </StateContent>
          </FlexHeader>
          {props.items.map(item => (
            <Item {...item} key={item.id}>hola</Item>
          ))}
          <User {...props} />
          <Data {...props} />
        </Content>
      )}
    </Layout>
  )
}

const FlexHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  @media screen and (max-width: 450px) {
    flex-direction: column-reverse;
  }
`

View.propTypes = {
  loading: bool,
  items: array,
  status: string
}

const Content = styled.div`
  max-width: 600px;
  margin: auto;
`
const Title = styled.h3`
  color: var(--main-blue-dark);
  width: 150px;
`
const StateContent = styled.div`
  display: flex;
  display: flex;
  align-items: center;
`
const Payed = styled(ButtonBase)`
  padding: 5px;
  background: #067206;
  color: #fff;
  border-radius: 5px;
  margin-left: 10px;
  width: 160px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  & svg {
    margin-right: 10px;
  }
`
const Pending = styled(Payed)`
  background:  orange;
`
const Cancelled = styled(Payed)`
  background: red;
`
const Sent = styled(Payed)`
  background: #57b5fe;
`

export default View
