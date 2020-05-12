import React from 'react'
import HeaderDesktop from './header_desktop'
import styled from 'styled-components'
import Responsive from '../../../components/responsive'
import HeaderMobile from '../header_mobile'

const Header = (props) => {
  return (
    <HeaderContainer>
      <Responsive rule='min-width:700px'>
        <HeaderDesktop />
      </Responsive>
      <Responsive rule='max-width:699px'>
        <HeaderMobile />
      </Responsive>
    </HeaderContainer>
  )
}

const HeaderContainer = styled('div')`
  position: sticky;
  top: 0;
  z-index: 10;
`

export default Header
