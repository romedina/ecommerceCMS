import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Layout from '../../components/layout_admin'
import orders from '../../../modules/orders'

const Orders = props => {

  useEffect(() => {
    orders.getMonths().then(res => console.log())
  }, [])

  return (
    <Layout>
      <div>hello</div>
    </Layout>
  )
}

export default Orders
