import React from 'react'
import styled from 'styled-components'
import config from '../../../config'
import ContainerBase from '../container'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import PhoneIcon from '@material-ui/icons/Phone'
import Link from '../../../components/link'
import Responsive from '../../../components/responsive'

const Footer = () => {
  return (
    <footer>
      <Responsive rule='min-width:600px'>
        <FullWidthSecondary>
          <ContainerSecondary>
            <Logo>Your logo here</Logo>
            <MenuContent>
              <MenuItem to='/'>Home</MenuItem>
              <MenuItem to='/products'>Productos</MenuItem>
              <MenuItem to='/about'>Nosotros</MenuItem>
              <MenuItem to='/contact'>Contacto</MenuItem>
            </MenuContent>
          </ContainerSecondary>
        </FullWidthSecondary>
      </Responsive>
      <FullWidthPrimary>
        <ConatinerPrimary>
          <Copyright>{config.message.copyright}</Copyright>
          <Contact>
            <ContactItem><EmailIcon />{config.contacts.email}</ContactItem>
            <ContactItem><PhoneIconStyled />{config.contacts.number}</ContactItem>
          </Contact>
        </ConatinerPrimary>
      </FullWidthPrimary>
    </footer>
  )
}

const FullWidthPrimary = styled('div')`
  background: var(--user-black);
`
const FullWidthSecondary = styled('div')`
  background: var(--user-black-light);
`
const Copyright = styled('div')`
  @media screen and (max-width:450px){
    margin-bottom: 10px;
  }
`
const ConatinerPrimary = styled(ContainerBase)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--user-black-light);
  flex-wrap: wrap;
`

const Contact = styled('div')`
  display: flex;
  flex-wrap: wrap;
`
const ContactItem = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  &:last-of-type {
    margin-right: 0px;
  }
  @media screen and (max-width:450px){
    margin-bottom: 10px;
  }
`
const EmailIcon = styled(MailOutlineIcon)`
  color: var(--user-black-light);
  margin-right: 10px;
`
const PhoneIconStyled = styled(PhoneIcon)`
  color: var(--user-black-light);
  margin-right: 10px;
`
const ContainerSecondary = styled(ContainerBase)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Logo = styled('div')`
  font-size: 1.5em;
`

const MenuContent = styled('div')`
  display: flex;
`
const MenuItem = styled(Link)`
  padding: 10px;
  font-size: 1.3em;
`
export default Footer
