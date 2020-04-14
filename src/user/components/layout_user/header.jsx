import React from 'react'
import HeaderDesktop from './header_desktop'
import styled from 'styled-components'
import Responsive from '../../../components/responsive'

const Header = (props) => {
  return (
    <HeaderContainer>
      <Responsive rule='min-width:600px'>
        <HeaderDesktop />
      </Responsive>
    </HeaderContainer>
  )
}

const HeaderContainer = styled('div')`
  position: sticky;
`

export default Header
