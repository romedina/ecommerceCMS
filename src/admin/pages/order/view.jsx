import React from 'react'
import Layout from '../../components/layout_admin'
import Skeleton from './skeleton'
import { bool, array } from 'prop-types'
import Item from './item'
import styled from 'styled-components'

const View = props => {
  console.log(props)
  return (
    <Layout>
      {props.loading && (
        <Skeleton />
      )}
      {!props.loading && (
        <Content>
          {props.items.map(item => (
            <Item {...item} key={item.id}>hola</Item>
          ))}
        </Content>
      )}
    </Layout>
  )
}

View.propTypes = {
  loading: bool,
  items: array
}

const Content = styled.div`
  
`

export default View
