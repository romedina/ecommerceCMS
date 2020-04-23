import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchItems } from '../../../flux/orders'
import View from './view'

const Order = props => {
  const { id, period } = useParams()
  const dispatch = useDispatch()
  const { items, loading } = useSelector(state => state.orders)
  const itemSelected = items[id] || null

  // fetch if not exist
  useEffect(() => {
    if (!itemSelected) dispatch(fetchItems(period))
  }, [])

  return (
    <View
      {...itemSelected}
      loading={loading}
    />
  )
}

export default Order
