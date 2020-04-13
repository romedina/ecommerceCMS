import React from 'react'
import styled from 'styled-components'

const ContainerComponent = (props) => {
  return (
    <Container id='container_admin'>
      <MenuContainer>
        hello menu
      </MenuContainer>
      <Body>
        {props.children}
      </Body>
    </Container>
  )
}

export default ContainerComponent

const Container = styled('div')`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  
`

const MenuContainer = styled('nav')`
  width: 250px;
  min-width: 250px;
  max-width: 250px;
  background: #0E3F67;
  height: 100vh;
  @media screen  and (max-width:800px){
    width: 200px;
    min-width: 200px;
    max-width: 250px
  }
  @media screen  and (max-width:700px){
    display: none;
  }
`

const Body = styled('section')`
  width: 100%;
  padding: 25px;
  box-sizing: border-box;
`