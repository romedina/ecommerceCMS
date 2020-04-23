import React, { useEffect } from 'react'
import styled from 'styled-components'
import propsTypes from 'prop-types'
import MenuRight from './menu_right'
import { setCounter } from '../../flux/messages'
import { useDispatch } from 'react-redux'
import { onCounterCHange } from '../../modules/message'
import { onCounterChange } from '../../modules/orders'
import { setCounter as setCounterOrder } from '../../flux/orders'

const ContainerComponent = (props) => {
  const dispatch = useDispatch()

  // subscribe on counter messages
  useEffect(any => {
    return onCounterCHange(counter => {
      dispatch(setCounter(counter))
    })
  }, [])

  // subscribe on counter messages
  useEffect(any => {
    return onCounterChange(counter => {
      dispatch(setCounterOrder(counter))
    })
  }, [])

  return (
    <Container id='container_admin'>
      <MenuContainer>
        <Fixed>
          <MenuContainer>
            <MenuRight />
          </MenuContainer>
        </Fixed>
      </MenuContainer>
      <Body>
        {props.children}
      </Body>
    </Container>
  )
}

ContainerComponent.propTypes = {
  children: propsTypes.oneOfType([propsTypes.object, propsTypes.array])
}

export default ContainerComponent

const Fixed = styled('div')`
  position: fixed;
  width: 250px;
  height: 100%;
  z-index: 0;
  @media screen  and (max-width:800px){
    width: 200px;
    min-width: 200px;
    max-width: 250px
  }
`

const Container = styled('div')`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

const MenuContainer = styled('nav')`
  background: #0E3F67;
  overflow: hidden;
  width: 250px;
  min-width: 250px;
  max-width: 250px;
  height: 100%;
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
