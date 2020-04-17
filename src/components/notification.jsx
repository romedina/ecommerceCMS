import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Fade } from '@material-ui/core'
import { Alert as AlertBase } from '@material-ui/lab'
import { remove } from '../flux/notification'

const Notification = props => {
  const items = useSelector(state => state.notification)
  const dispatch = useDispatch()

  return (
    <Container>
      {items.map((item, index) => (
        <Fade in={item.open} key={index} timeout={700}>
          <Alert onClose={event => dispatch(remove(item.key))} severity={item.type || 'success'}>
            {item.message}
          </Alert>
        </Fade>
      ))}
    </Container>
  )
}

const Container = styled.section`
  position: fixed;
  z-index: 11;
  bottom: 40px;
  left: 40px;
  width: 100%;
  max-width: 300px;
  transition: all 1s;
`

const Alert = styled(AlertBase)`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  min-height: 70px;
  align-items: center;
  font-size: 1.2em;
`
export default Notification
