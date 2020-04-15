import React, { useEffect, useState } from 'react'
import LayoutUser from '../../components/layout_user'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchSpecificItem } from '../../../flux/items'
import { addItem, RemoveItem } from '../../../flux/cart'
import { setAlert } from '../../../flux/alert'
import Container from '../../components/container'
import Data from './data'
import Skeleton from './skeleton'

const Item = props => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { items, loading } = useSelector(state => state.items)
  const myCart = useSelector(state => state.cart)
  const itemSelected = items.filter(item => item.id === id)[0] || null
  const [quantity, setQuantity] = useState(1)
  const isThisInMyCart = (myCart.filter(item => item.id === itemSelected.id).length > 0)

  console.log(isThisInMyCart)

  // fetch data
  useEffect(() => {
    if (!itemSelected) dispatch(fetchSpecificItem(id))
  }, [dispatch, itemSelected, id])

  //
  const AddToCart = event => {
    dispatch(addItem({ ...itemSelected, quantity }))
  }

  const removeFromMyCart = event => {
    dispatch(setAlert({
      action: () => dispatch(RemoveItem(itemSelected.id)),
      message: '¿Estas seguro de quitar este articulo de tu carrito?',
      title: 'Quitar Articulo',
      type: 'warning',
      textAction: 'Aceptar'
    }))
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
            removeFromMyCart={removeFromMyCart}
            isThisInMyCart={isThisInMyCart}
          />
        )}
      </Container>
    </LayoutUser>
  )
}

export default Item
