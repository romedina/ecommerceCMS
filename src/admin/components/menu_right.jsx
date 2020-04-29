import React from 'react'
import styled from 'styled-components'
import Link from '../../components/link'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { close } from '../../flux/session'

const MenuRight = props => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { pathname } = history.location
  const { counter } = useSelector(state => state.messages)
  const orders = useSelector(state => state.orders)

  const handleCloseSession = () => {
    dispatch(close())
  }

  return (
    <Container>
      <Logo>Put yout logo here</Logo>
      <div>
        <MenuItem active={pathname === '/my-articles'} to='/my-articles'> Mis Productos </MenuItem>
        <MenuItem active={pathname === '/create-item'} to='/create-item'> Subir Producto </MenuItem>
        <MenuItem active={pathname === '/orders'} to='/orders'>
          Pedidos
          {orders.counter > 0 && (
            <Counter>{orders.counter}</Counter>
          )}
        </MenuItem>
        <MenuItem active={pathname === '/messages'} to='/messages'>
          Mensajes
          {counter > 0 && (
            <Counter>{counter}</Counter>
          )}
        </MenuItem>
        <MenuItem handleClick={handleCloseSession}> Cerrar Sesión </MenuItem>
      </div>
    </Container>
  )
}
const Logo = styled.h1`
  color: var(--user-primary);
`

const Container = styled('div')`
  text-align: center;
  height: 100%;
`
const MenuItem = styled(Link)`
  background: ${props => props.active ? 'var(--main-blue)' : 'none'};
  color: #fff;
  width: 100%;
  padding: 20px 0px;
  font-size: 1.1em;
  position: relative;
`
const Counter = styled.div`
  background: red;
  margin-left: 10px;
  width: 20px;
  height: 20px;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`

export default MenuRight
