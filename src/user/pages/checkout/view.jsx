import React from 'react'
import Layout from '../../components/layout_user'
import ContainerBase from '../../components/container'
import Form from './form'
import propTypes from 'prop-types'

const View = props => {
  return (
    <Layout>
      <ContainerBase>
        {props.currentView === 'form' && (
          <Form {...props} />
        )}
      </ContainerBase>
    </Layout>
  )
}

View.propTypes = {
  currentView: propTypes.string
}

export default View
