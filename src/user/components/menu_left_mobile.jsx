import React from 'react'
import { SwipeableDrawer } from '@material-ui/core'
import styled from 'styled-components'
import propTypes from 'prop-types'
import LinkBase from '../../components/link'
import { InfoOutlined, ShoppingCartOutlined, HomeOutlined, LocalOfferOutlined, ContactSupportOutlined } from '@material-ui/icons'

const MenuLEft = props => {
  return (
    <SwipeableDrawer
      open={props.open}
      onClose={props.handleClose}
      onOpen={props.handleOpen}
      anchor='right'
    >
      <Container onClick={props.handleClose}>
        <Logo>Put your logo here</Logo>
        <Link to='/my-cart'><ShoppingCartOutlined />Mi carrito</Link>
        <Link to='/'><HomeOutlined />Inicio</Link>
        <Link to='/'><LocalOfferOutlined />Productos</Link>
        <Link to='/about'><InfoOutlined />Nosotros</Link>
        <Link to='/contact'><ContactSupportOutlined />Contacto</Link>
      </Container>
    </SwipeableDrawer>
  )
}

MenuLEft.propTypes = {
  open: propTypes.bool,
  handleClose: propTypes.func,
  handleOpen: propTypes.func
}

const Container = styled.nav`
  width: 80vw;
  max-width: 300px;
  padding: 10px;
`
const Logo = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  margin-top: 30px;
`
const Link = styled(LinkBase)`
  padding: 7px 15px; 
  display: block;
  width: 100%;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.2em;
  /* SVG ICONS */
  & svg {
    font-size: 2em;
    margin-right: 15px;
  }
`

export default MenuLEft
