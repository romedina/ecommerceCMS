import React from 'react'
import ContainerBase from '../container'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ButtonBase } from '@material-ui/core'
import { ShoppingCart, Search } from '@material-ui/icons'

const HeaderDesktop = (props) => {
  return (
    <FullWidth>
      <Container>
        <LogoContainer>
          Put your logo here
        </LogoContainer>
        <ActionContainer>
          <MenuContainer>
            <ButtonBaseStyled><LinkStyled to='/'>Home</LinkStyled></ButtonBaseStyled>
            <ButtonBaseStyled><LinkStyled to='/'>Productos</LinkStyled></ButtonBaseStyled>
            <ButtonBaseStyled><LinkStyled to='/'>Nosotros</LinkStyled></ButtonBaseStyled>
            <ButtonBaseStyled><LinkStyled to='/'>Contacto</LinkStyled></ButtonBaseStyled>
          </MenuContainer>
          <ActionsPrimary>
            <ActionsItem><ShoppingCart /></ActionsItem>
            <ActionsItem><Search /></ActionsItem>
          </ActionsPrimary>
        </ActionContainer>
      </Container>
    </FullWidth>
  )
}

const Container = styled(ContainerBase)`
  display: flex;
  justify-content: space-between;
  font-size: 1.2em;
  padding-bottom: 20px;
  padding-top: 20px;
`

const FullWidth = styled('div')`
  border-bottom: 1px solid var(--user-secondary);
`
const LogoContainer = styled('div')`
  font-size: 1.2em;
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
  text-decoration: none;
  font-size: initial;
  color: inherit;
  font-weight: bold;
`
const ActionsPrimary = styled('div')`

`

const ActionsItem = styled(ButtonBase)`
  margin-right: 15px;
  &:last-of-type {
    margin: 0px;
  }
`

export default HeaderDesktop
