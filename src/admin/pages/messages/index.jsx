import React, { useEffect, useState } from 'react'
import Admin from '../../hoc/admin'
import { useDispatch, useSelector } from 'react-redux'
import { fetchItems, resetCounter, updateStatus } from '../../../flux/messages'
import lastPosition from '../../../helpers/last_position'
import View from './view'

const Messages = props => {
  const dispatch = useDispatch()
  const { items, loading, isfinally } = useSelector(state => state.messages)
  const [itemSelected, setItemSelected] = useState(null)

  // fetch messags if not exist and reset counter
  useEffect(() => {
    dispatch(resetCounter())
    if (items.length === 0) dispatch(fetchItems())
  }, [dispatch, items.length])

  // pagination with scroll
  useEffect(event => {
    const handleScroll = event => {
      const isInLastPosition = lastPosition(500)
      if (!loading && isInLastPosition && !isfinally) {
        dispatch(fetchItems())
      }
    }
    window.addEventListener('scroll', handleScroll)
    return event => window.removeEventListener('scroll', handleScroll)
  }, [loading, isfinally, dispatch])

  // show message
  const showMessage = data => {
    setItemSelected(data)
    if (data.isActive) dispatch(updateStatus(data.id))
  }

  // hideMessgae
  const hiddeMessage = any => {
    setItemSelected(null)
  }

  return (
    <View
      showMessage={showMessage}
      items={items}
      loading={loading}
      itemSelected={itemSelected}
      setItemSelected={itemSelected}
      hiddeMessage={hiddeMessage}
    />
  )
}

export default Admin(Messages)
