import React from 'react'
import styled from 'styled-components'
import ContainerBase from '../container'
import config from '../../config'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import PhoneIcon from '@material-ui/icons/Phone'

const HeaderContact = () => {
  return (
    <FullWidth>
      <Container>
        <ContactItem>
          <EmailIconStyled />
          {config.contacts.email}
        </ContactItem>
        <ContactItem>
          <PhoneconStyled />
          {config.contacts.number}
        </ContactItem>
      </Container>
    </FullWidth>
  )
}

const EmailIconStyled = styled(MailOutlineIcon)`
  margin-right: 25px;
`
const PhoneconStyled = styled(PhoneIcon)`
  margin-right: 25px;
`

const ContactItem = styled('div')`
  display: flex;
  align-items: center;
`

const FullWidth = styled('header')`
  background: var(--user-secondary);
`

const Container = styled(ContainerBase)`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 1.1em;
  @media screen and (max-width:450px) {
    display: none;
  }
`

export default HeaderContact
