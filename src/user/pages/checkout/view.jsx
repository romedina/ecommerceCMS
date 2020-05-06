import React from 'react'
import Layout from '../../components/layout_user'
import ContainerBase from '../../components/container'
import Form from './form'
import propTypes from 'prop-types'
import Loading from './loading'
import SuccessPaypal from './success'
import styled from 'styled-components'
import SuccessCash from './successCash'
import SuccessSPei from './components/success_spei'

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
        {props.currentView === 'payedSuccess' && (
          <SuccessPaypal />
        )}
        {props.currentView === 'successCash' && (
          <SuccessCash {...props} />
        )}
        {props.currentView === 'successSpei' && (
          <SuccessSPei {...props} />
        )}
      </Container>
    </Layout>
  )
}

const Container = styled(ContainerBase)`
`

View.propTypes = {
  currentView: propTypes.string
}

export default View
