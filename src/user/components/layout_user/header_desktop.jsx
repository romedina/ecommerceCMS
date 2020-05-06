/* eslint-disable react/jsx-handler-names */
import React from 'react'
import ContainerBase from '../container'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ButtonBase from '../../../components/link'
import { ShoppingCart, Search } from '@material-ui/icons'
import { useSelector } from 'react-redux'
import SearchBar from './search'
import { dispatch } from '../../../store'
import { setActive } from '../../../flux/search'
import Logourl from '../../../assets/logo.png'

const HeaderDesktop = (props) => {
  const cartCounter = useSelector(state => state.cart).length
  const isMenuActive = useSelector(state => state.search.isActive)

  const onSearchClick = event => dispatch(setActive(true))

  return (
    <FullWidth>
      <Container>
        <LogoContainer>
          <Logo src={Logourl} />
        </LogoContainer>
        {!isMenuActive && (
          <ActionContainer>
            <MenuContainer>
              <ButtonBaseStyled><LinkStyled to='/'>Home</LinkStyled></ButtonBaseStyled>
              <ButtonBaseStyled><LinkStyled to='/'>Productos</LinkStyled></ButtonBaseStyled>
              <ButtonBaseStyled><LinkStyled to='/about'>Nosotros</LinkStyled></ButtonBaseStyled>
              <ButtonBaseStyled><LinkStyled to='/contact'>Contacto</LinkStyled></ButtonBaseStyled>
            </MenuContainer>
            <ActionsPrimary>
              <ActionsItem to='/my-cart'>
                {cartCounter > 0 && (
                  <CounterItems>{cartCounter}</CounterItems>
                )}
                <ShoppingCart />
              </ActionsItem>
              <ActionsItem handleClick={onSearchClick}>
                <Search />
              </ActionsItem>
            </ActionsPrimary>
          </ActionContainer>
        )}
        {isMenuActive && (
          <SearchBar />
        )}
      </Container>
    </FullWidth>
  )
}

const CounterItems = styled.div`
  background: red;
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  top: -5px;
  right: -5px;
`
const Logo = styled.img`
  display: block;
`

const Container = styled(ContainerBase)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2em;
  padding-bottom: 0px;
  padding-top: 0px;
  height: 60px;
  overflow: hidden;
`

const FullWidth = styled('div')`
  background-color: var(--header-secondary);
  border-bottom: 1px solid var(--user-secondary);
`
const LogoContainer = styled('div')`
  font-size: 1.2em;
  width: 200px;
`

const ActionContainer = styled('div')`
  color: var(--user-secondary);
  display: flex;
  align-items: center;
`

const MenuContainer = styled('div')`
  border-right: 1px solid;
  margin-right: 15px;
`
const ButtonBaseStyled = styled(ButtonBase)`
  margin-right: 20px;
`

const LinkStyled = styled(Link)`
  color: var(--header-secondary-color);
  text-decoration: none;
  font-size: initial;
  font-weight: bold;
`
const ActionsPrimary = styled('div')`
`
const ActionsItem = styled(ButtonBase)`
  color: var(--header-secondary-color);
  position: relative;
  margin-right: 15px;
  &:last-of-type {
    margin: 0px;
  }
`

export default HeaderDesktop
