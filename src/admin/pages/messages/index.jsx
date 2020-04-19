import React, { useEffect } from 'react'
import Layout from '../../components/layout_admin'
import Admin from '../../hoc/admin'
import { useDispatch, useSelector } from 'react-redux'
import { fetchItems, resetCounter } from '../../../flux/messages'

const Messages = props => {
  const dispatch = useDispatch()
  const { items } = useSelector(state => state.messages)

  // fetch messags if not exist and reset counter
  useEffect(() => {
    dispatch(resetCounter())
    if (items.length === 0) dispatch(fetchItems())
  }, [])

  return (
    <Layout>
      <h1>hello</h1>
    </Layout>
  )
}

export default Admin(Messages)
