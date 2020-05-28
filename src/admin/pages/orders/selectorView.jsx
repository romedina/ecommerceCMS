import React from 'react'
import styled from 'styled-components'
import { ViewList, ViewModule } from '@material-ui/icons'
import { useSelector } from 'react-redux'
import { dispatch } from '../../../store'
import { updateOrderType } from '../../../flux/config'

const ViewSelector = props => {
  const type = useSelector(state => state.config.orders.type)

  const setGrid = () => dispatch(updateOrderType('grid'))
  const setList = () => dispatch(updateOrderType('list'))

  return (
    <Container>
      <Icon onClick={setList} as={ViewList} selected={type === 'list'} />
      <Icon onClick={setGrid} as={ViewModule} selected={type === 'grid'} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Icon = styled.div`
  color: ${props => props.selected ? 'var(--main-blue-dark)' : 'gray'};
  margin-right: 20px;
  font-size: 30px;
  cursor: pointer;
  &:hover {
    color: var(--main-blue-light)
  }
`

export default ViewSelector
