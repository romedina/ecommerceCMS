import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import { func, bool, string } from 'prop-types'
import { useDispatch } from 'react-redux'
import { setStatus } from '../../../flux/orders'
import { setNotification } from '../../../flux/notification'

function DialogCOmponent (props) {
  const dispatch = useDispatch()

  const handleChangeStatus = newStatus => {
    props.onClose()
    dispatch(setStatus({
      status: newStatus,
      id: props.id,
      period: props.period
    }))
    dispatch(setNotification({
      message: 'El estado del pedido se ha actualizado correctamente',
      type: 'success'
    }))
  }

  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogTitle>Selecciona una opcion</DialogTitle>
      <List>
        <ListItem autoFocus button onClick={event => handleChangeStatus('pending')}>
          Pago pendiente
        </ListItem>
        <ListItem autoFocus button onClick={event => handleChangeStatus('payed')}>
          Pagado
        </ListItem>
        <ListItem autoFocus button onClick={event => handleChangeStatus('sent')}>
          Enviado
        </ListItem>
        <ListItem autoFocus button onClick={event => handleChangeStatus('cancelled')}>
          Cancelado
        </ListItem>
      </List>
    </Dialog>
  )
}

DialogCOmponent.propTypes = {
  onClose: func,
  open: bool,
  id: string,
  period: string
}

export default DialogCOmponent
