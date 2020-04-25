import React, { memo } from 'react'
import { bool, func } from 'prop-types'
import { Drawer, Content, Logo, LogoContent, ContentItems, MenuItem, Counter } from './styled'
import { Home, Publish, List, LocalMall, Message, ExitToApp } from '@material-ui/icons'
import { useSelector } from 'react-redux'
import { dispatch } from '../../../store'
import { close } from '../../../flux/session'

const MenuMobile = props => {
  const messageCounter = useSelector(state => state.messages.counter)
  const ordersCounter = useSelector(state => state.orders.counter)

  const handleCloseSession = props => {
    dispatch(close())
  }

  return (
    <Drawer open={props.isMenuActive} onClose={props.handleClose} onOpen={props.handleOpenMenu} anchor='right'>
      <Content>
        <LogoContent>
          <Logo src='https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo-title-light.png' />
        </LogoContent>
        <ContentItems>
          <MenuItem to='/'>
            <Home />
            Mi tienda
          </MenuItem>
          <MenuItem to='/create-item'>
            <Publish />
            Subir Producto
          </MenuItem>
          <MenuItem to='/my-articles'>
            <List />
            Mis Productos
          </MenuItem>
          <MenuItem to='/orders'>
            <LocalMall />
            Pedidos
            {!!ordersCounter && (
              <Counter>{ordersCounter}</Counter>
            )}
          </MenuItem>
          <MenuItem to='/messages'>
            <Message />
            Mensajes
            {!!messageCounter && (
              <Counter>{messageCounter}</Counter>
            )}
          </MenuItem>
          <MenuItem handleClick={handleCloseSession}>
            <ExitToApp />
            Cerrar Sesión
          </MenuItem>
        </ContentItems>
      </Content>
    </Drawer>
  )
}

MenuMobile.propTypes = {
  isMenuActive: bool,
  handleClose: func,
  handleOpenMenu: func
}

export default memo(
  MenuMobile,
  (prev, next) => prev.isMenuActive === next.isMenuActive
)
