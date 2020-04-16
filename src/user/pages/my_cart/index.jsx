import React from 'react'
import Layout from '../../components/layout_user'
import { useSelector, useDispatch } from 'react-redux'
import ContainerBase from '../../components/container'
import Item from './item'
import styled from 'styled-components'

const MyCart = props => {
  const myCart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  return (
    <Layout>
      <Container>
        {myCart.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </Container>
    </Layout>
  )
}

const Container = styled(ContainerBase)`
  max-width: 1000px;
`

export default MyCart
