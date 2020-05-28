import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchItems } from '../../../flux/orders'
import transformer from '../../../helpers/transformer'
import Admin from '../../hoc/admin'
import View from './view'

const Orders = props => {
  const date = new Date()
  const initialPeriod = `${date.getMonth() + 1}-${date.getFullYear()}`
  const dispatch = useDispatch()
  const { loading, items } = useSelector(state => state.orders)
  const [currentPeriod, setCurrentPeriod] = useState(initialPeriod)
  const itemOnCurrentPeriod = transformer.toArray(items).filter(item => item.period === currentPeriod)
  const viewType = useSelector(state => state.config.orders.type)
  const [isTableAvalible, setTableAvalible] = useState(true)

  // fetch items if not exists
  useEffect(() => {
    if (!itemOnCurrentPeriod.length) dispatch(fetchItems(currentPeriod))
  }, [currentPeriod, dispatch, itemOnCurrentPeriod.length])

  // screen test
  const isListAvaliableCalculator = ({ matches }) => {
    setTableAvalible(matches)
  }

  // calculate grid
  useEffect(() => {
    var mediaQuery = window.matchMedia('(min-width:1050px)')
    isListAvaliableCalculator(mediaQuery)
    mediaQuery.addListener(isListAvaliableCalculator)
    return () => mediaQuery.removeListener(isListAvaliableCalculator)
  }, [])

  const viewTypeCalculated = isTableAvalible ? viewType : 'grid'

  return (
    <View
      isTableAvalible={isTableAvalible}
      viewType={viewTypeCalculated}
      loading={loading}
      setCurrentPeriod={setCurrentPeriod}
      items={itemOnCurrentPeriod}
      currentPeriod={currentPeriod}
    />
  )
}

export default Admin(Orders)
