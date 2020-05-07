import React from 'react'
import config from '../../../config'
import { FullWidthPrimary, FullWidthSecondary, Copyright, ConatinerPrimary, Contact, ContactItem, EmailIcon, PhoneIconStyled, ContainerSecondary, Logo, MenuContent, MenuItem } from './styled'
import Responsive from '../../../components/responsive'
import Logosrc from '../../../assets/logo.png'

const Footer = () => {
  return (
    <footer>
      <Responsive rule='min-width:600px'>
        <FullWidthSecondary>
          <ContainerSecondary>
            <Logo src={Logosrc} />
            <MenuContent>
              <MenuItem to='/'>Home</MenuItem>
              <MenuItem to='/'>Productos</MenuItem>
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

export default Footer
