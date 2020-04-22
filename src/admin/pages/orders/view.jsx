import React from 'react'
import styled from 'styled-components'
import Layout from '../../components/layout_admin'
import Title from '../../components/page_title'
import PeriodSelector from './period_selector'
import Order from './order'
import propTypes from 'prop-types'
import Skeleton from './skeleton'
import LoyaltyIcon from '@material-ui/icons/Loyalty'

const View = props => {
  return (
    <Layout>
      <Title>Mis Pedidos</Title>
      <PeriodSelector {...props} />
      {props.items.length > 0 && !props.loading && (
        <Flex>
          {props.items.map(item => (
            <Order {...item} key={item.id} />
          ))}
        </Flex>
      )}
      {props.items.length === 0 && props.loading && (
        <Skeleton />
      )}
      {!props.loading && props.items.length === 0 && (
        <Empty>
          <LoyaltyIcon />
          Aun no tienes pedidos
        </Empty>
      )}
    </Layout>
  )
}

View.propTypes = {
  items: propTypes.array,
  loading: propTypes.bool
}

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
`
const Empty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  flex-direction: column;
  font-size: 2em;
  color: #008ffd4d;
  & svg {
    margin-bottom: 30px;
    font-size: 150px;
    color: #008ffd4d;
  }
`

export default View
