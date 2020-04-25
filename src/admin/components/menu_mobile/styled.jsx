import { SwipeableDrawer as DrawerBase } from '@material-ui/core'
import LinkBase from '../../../components/link'
import styled from 'styled-components'

export const Drawer = styled(DrawerBase)`

`
export const Content = styled.div`
  min-width: 250px;
  width: 250px;
`
export const LogoContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--main-blue-dark);
`
export const Logo = styled.img`
  display: block;
  max-width: 70%;
  padding: 30px 0px;
`
export const ContentItems = styled.div`
  padding: 20px;
`
export const MenuItem = styled(LinkBase)`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  font-size: 1.2em;
  width: 100%;
  text-align: left;
  color: var(--main-blue-dark);
  & svg {
    margin-right: 20px;
  }
`
export const Counter = styled.div`
  background: red;
  padding: 2px 4px;
  margin-left: 10px;
  color: #fff;
  border-radius: 5px;
`
