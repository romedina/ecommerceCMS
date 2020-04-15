import React, { useEffect } from 'react'
import LayoutUser from '../../components/layout_user'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchSpecificItem } from '../../../flux/items'
import Container from '../../components/container'

import Data from './data'
import Skeleton from './skeleton'

const Item = props => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { items, loading } = useSelector(state => state.items)
  const itemSelected = items.filter(item => item.id === id)[0] || null

  useEffect(() => {
    if (!itemSelected) dispatch(fetchSpecificItem(id))
  }, [dispatch, itemSelected, id])

  return (
    <LayoutUser>
      <Container>
        {loading && (<Skeleton />)}
        {!loading && (
          <Data {...itemSelected} />
        )}
      </Container>
    </LayoutUser>
  )
}

export default Item
