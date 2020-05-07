import ContainerBase from '../container'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import PhoneIcon from '@material-ui/icons/Phone'
import Link from '../../../components/link'
import styled from 'styled-components'

export const FullWidthPrimary = styled('div')`
  background: var(--user-black);
`
export const FullWidthSecondary = styled('div')`
  background: var(--user-black-light);
`
export const Copyright = styled('div')`
  @media screen and (max-width:450px){
    margin-bottom: 10px;
  }
`
export const ConatinerPrimary = styled(ContainerBase)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--user-black-light);
  flex-wrap: wrap;
`

export const Contact = styled('div')`
  display: flex;
  flex-wrap: wrap;
`
export const ContactItem = styled('div')`
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
export const EmailIcon = styled(MailOutlineIcon)`
  color: var(--user-black-light);
  margin-right: 10px;
`
export const PhoneIconStyled = styled(PhoneIcon)`
  color: var(--user-black-light);
  margin-right: 10px;
`
export const ContainerSecondary = styled(ContainerBase)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Logo = styled('img')`
  width: 200px;
`

export const MenuContent = styled('div')`
  display: flex;
`
export const MenuItem = styled(Link)`
  padding: 10px;
  font-size: 1.3em;
`
