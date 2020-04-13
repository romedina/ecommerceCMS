import React from 'react'
import LayoutUser from '../../components/layout_user'
import styled from 'styled-components'
import FooterSecondary from '../../components/footer_secondary'

const Home = () => {
  return (
    <LayoutUser>
      <Body>
        hello home
      </Body>
      <FooterSecondary />
    </LayoutUser>
  )
}

const Body = styled('section')`
  min-height: 100vh;
  top: 0px;
  right: 0px;
  z-index: 10;
`

export default Home
