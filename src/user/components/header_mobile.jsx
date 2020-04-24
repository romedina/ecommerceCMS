import React, { useState } from 'react'
import styled from 'styled-components'
import Container from '../components/container'
import { Search, Menu, ShoppingCart, Apple } from '@material-ui/icons'
import MenuLeft from './menu_left_mobile'
import Link from '../../components/link'
import { useSelector } from 'react-redux'

const HeaderMobile = props => {
  const [menuActive, setMenuActive] = useState(false)
  const itemsOnTheCart = useSelector(state => state.cart)

  console.log(itemsOnTheCart)

  return (
    <header>
      <MenuLeft
        open={menuActive}
        handleClose={() => setMenuActive(false)}
        handleOpen={() => setMenuActive(true)}
      />
      <Content />
      <Fixed>
        <Content>
          <LinkStyled to='/'><Apple /></LinkStyled>
          <LinkStyled to='/my-cart'>
            {itemsOnTheCart.length > 0 && (
              <Counter>{itemsOnTheCart.length}</Counter>
            )}
            <ShoppingCart />
          </LinkStyled>
          <LinkStyled to='/search'><Search /></LinkStyled>
          <LinkStyled handleClick={() => setMenuActive(true)}><Menu /></LinkStyled>
        </Content>
      </Fixed>
    </header>
  )
}
const LinkStyled = styled(Link)`
  padding: 5px;
  position: relative;
  & svg {
    font-size: 2.2em;
  }
`

const Content = styled(Container)`
  background: var(--user-black);
  height: 60px;
  padding-top: 0px;
  padding-bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--user-primary);
`
const Fixed = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
  font-size: 2em;
`
const Counter = styled.div`
  background: red;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  top: -5px;
  right: -5px;
  position: absolute;
`
export default HeaderMobile
