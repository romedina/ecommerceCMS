import React, { useEffect } from 'react'
import LayoutAdmin from '../../components/LayoutAdmin'
import { fetchItems } from '../../flux/items'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const MyArticles = (props) => {
  const { loading, items } = useSelector(state => state.items)
  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchItems())
    }
  }, [])

  return (
    <LayoutAdmin>
      {loading && (
        <h1>Loading</h1>
      )}
      {!loading && (
        items.map((item, index) => (
          <h2 onClick={() => { history.push('create-item', JSON.parse(JSON.stringify(item))) }} key={index}>{item.title}</h2>
        ))
      )}
    </LayoutAdmin>
  )
}

export default MyArticles
