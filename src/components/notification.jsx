import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Fade } from '@material-ui/core'

const Notification = props => {
  const items = useSelector(state => state.notification)

  return (
    <Container>
      {items.map((item, index) => (
        <Fade in={item.open} key={index} timeout={700}>
          <Success>
            {item.message}
          </Success>
        </Fade>
      ))}
    </Container>
  )
}

const Container = styled.section`
  position: fixed;
  z-index: 2;
  bottom: 40px;
  left: 40px;
  width: 100%;
  max-width: 300px;
  transition: all 1s;
`
const ItemContent = styled.div`
  margin-bottom: 10px;
  background: #fff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 2px 2px 5px black;
  min-height: 70px;
  display: flex;
  align-items: center;
  font-weight: bold;
`
const Success = styled(ItemContent)`
  border-left: 5px solid green;
`
export default Notification
