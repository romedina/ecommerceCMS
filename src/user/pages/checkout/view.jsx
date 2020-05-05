import React from 'react'
import Layout from '../../components/layout_user'
import ContainerBase from '../../components/container'
import Form from './form'
import propTypes from 'prop-types'
import Loading from './loading'
import SuccessPaypal from './success'
import styled from 'styled-components'

const View = props => {
  return (
    <Layout>
      <Container>
        {props.currentView === 'form' && (
          <Form {...props} />
        )}
        {props.currentView === 'loading' && (
          <Loading />
        )}
        {props.currentView === 'SuccessPaypal' && (
          <SuccessPaypal />
        )}
      </Container>
    </Layout>
  )
}

const Container = styled(ContainerBase)`
  background: #fff;
`

View.propTypes = {
  currentView: propTypes.string
}

export default View
