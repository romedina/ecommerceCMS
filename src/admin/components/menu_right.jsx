import React from 'react'
import styled from 'styled-components'
import Link from '../../components/link'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { close } from '../../flux/session'

const MenuRight = props => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { pathname } = history.location

  const handleCloseSession = () => {
    dispatch(close())
  }

  return (
    <Container>
      <Logo>Put yout logo here</Logo>
      <div>
        <MenuItem active={pathname === '/my-articles'} to='/my-articles'> Mis productos </MenuItem>
        <MenuItem active={pathname === '/create-item'} to='/create-item'> Subir Producto </MenuItem>
        <MenuItem handleClick={handleCloseSession}> Cerra session </MenuItem>
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
`

export default MenuRight
