import React from 'react'
import HeaderDesktop from './header_desktop'
import styled from 'styled-components'

const Header = (props) => {
  return (
    <HeaderContainer>
      <HeaderDesktop />
    </HeaderContainer>
  )
}

const HeaderContainer = styled('div')`
  position: sticky;
`

export default Header
