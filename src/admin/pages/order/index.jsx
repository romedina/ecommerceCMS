import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchItems, updateViewed } from '../../../flux/orders'
import Admin from '../../hoc/admin'

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

  // update viewed
  useEffect(() => {
    if (itemSelected && !itemSelected.isViewed) {
      dispatch(updateViewed({ id, period }))
    }
  }, [itemSelected])

  return (
    <View
      {...itemSelected}
      loading={loading}
    />
  )
}

export default Admin(Order)
