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
      {props.currentView === 'form' && (
        <Container>
          <Form {...props} />
        </Container>
      )}
      {props.currentView === 'loading' && (
        <Container>
          <Loading />
        </Container>
      )}
      {props.currentView === 'payedSuccess' && (
        <Container>
          <SuccessPaypal />
        </Container>
      )}
      {props.currentView === 'successCash' && (
        <SuccessCash {...props} />
      )}
      {props.currentView === 'successSpei' && (
        <SuccessSPei {...props} />
      )}
    </Layout>
  )
}

const Container = styled(ContainerBase)`
`

View.propTypes = {
  currentView: propTypes.string
}

export default View
