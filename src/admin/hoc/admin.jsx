import React from 'react'
import { useSelector } from 'react-redux'
import Login from '../../admin/pages/login'

const Admin = WrappedComponents => {
  return function ComponentEhanced (props) {
    const { logged } = useSelector(state => state.session)
    if (logged) return (<WrappedComponents {...props} />)
    return (<Login />)
  }
}

export default Admin
