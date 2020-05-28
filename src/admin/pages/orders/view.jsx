import React from 'react'
import styled from 'styled-components'
import Layout from '../../components/layout_admin'
import Title from '../../components/page_title'
import PeriodSelector from './period_selector'
import Order from './order'
import propTypes, { oneOf } from 'prop-types'
import Skeleton from './skeleton'
import LoyaltyIcon from '@material-ui/icons/Loyalty'
import ViewSelector from './selectorView'
import List from './list'

const View = props => {
  return (
    <Layout title='Mis Pedidos'>
      <Title>Mis Pedidos</Title>
      <FlexCntent>
        <PeriodSelector {...props} />
        {props.isTableAvalible && (
          <ViewSelector />
        )}
      </FlexCntent>
      {props.items.length > 0 && !props.loading && props.viewType === 'grid' && (
        <Flex>
          {props.items.map(item => (
            <Order {...item} key={item.id} />
          ))}
        </Flex>
      )}
      {props.items.length > 0 && !props.loading && props.viewType === 'list' && (
        <List items={props.items} />
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
  loading: propTypes.bool,
  viewType: oneOf(['list', 'grid']),
  isTableAvalible: propTypes.bool
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
const FlexCntent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default View
