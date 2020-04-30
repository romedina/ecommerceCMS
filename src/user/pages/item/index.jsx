import React, { useEffect, useState } from 'react'
import LayoutUser from '../../components/layout_user'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchSpecificItem } from '../../../flux/items'
import { addItem } from '../../../flux/cart'
import { setNotification } from '../../../flux/notification'
import Container from '../../components/container'
import Data from './data'
import Skeleton from './skeleton'
import Related from './related'

const Item = props => {
  const { id } = useParams()
  const dispatch = useDispatch()
  var { items, loading } = useSelector(state => state.items)
  const itemSelected = items[id] || null
  const [quantity, setQuantity] = useState(1)

  // fetch data
  useEffect(() => {
    if (!itemSelected) dispatch(fetchSpecificItem(id))
  }, [])

  const AddToCart = event => {
    dispatch(setNotification({
      type: 'success',
      message: `Se han agregado ${quantity} ${itemSelected.title} en tu carrito`
    }))
    dispatch(addItem({ ...itemSelected, quantity }))
  }

  const onQuantityChange = event => {
    var newValue = event.target.value
    if (newValue === '') {
      setQuantity('')
      return false
    }
    newValue = parseInt(newValue)
    if (isNaN(newValue)) newValue = 1
    setQuantity(newValue)
  }

  // move to up
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  return (
    <LayoutUser>
      <Container>
        {loading && (<Skeleton />)}
        {!loading && (
          <Data
            AddToCart={AddToCart}
            {...itemSelected}
            onQuantityChange={onQuantityChange}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        )}
        <Related />
      </Container>
    </LayoutUser>
  )
}

export default Item
