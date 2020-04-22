import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchItems } from '../../../flux/orders'
import transformer from '../../../helpers/transformer'
import View from './view'

const Orders = props => {
  const date = new Date()
  const initialPeriod = `${date.getMonth() + 1}-${date.getFullYear()}`
  const dispatch = useDispatch()
  const { loading, items } = useSelector(state => state.orders)
  const [currentPeriod, setCurrentPeriod] = useState(initialPeriod)
  const itemOnCurrentPeriod = transformer.toArray(items).filter(item => item.period === currentPeriod)

  // fetch items if not exists
  useEffect(() => {
    if (!itemOnCurrentPeriod.length) dispatch(fetchItems(currentPeriod))
  }, [currentPeriod, dispatch])

  return (
    <View
      loading={loading}
      setCurrentPeriod={setCurrentPeriod}
      items={itemOnCurrentPeriod}
      currentPeriod={currentPeriod}
    />
  )
}

export default Orders
