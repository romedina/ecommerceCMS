/* eslint-disable react/jsx-handler-names */
import React from 'react'
import Layout from '../../components/layout_admin'
import propTypes from 'prop-types'
import Title from '../../components/page_title'
import Message from './message'
import styled from 'styled-components'
import { CircularProgress } from '@material-ui/core'
import Skeleton from './skeleton'
import Modal from './modal'

const ViewMessages = props => {
  return (
    <Layout>
      <Modal {...props} />
      <Content>
        <Title>Mensajes</Title>
      </Content>
      {props.items.length > 0 && (
        <Content>
          {props.items.map((item, index) => (
            <Message {...item} key={item.id || index} showMessage={props.showMessage} />
          ))}
          {props.loading && (
            <LoaderContent>
              <CircularProgress />
            </LoaderContent>
          )}
        </Content>
      )}
      {props.items.length === 0 && props.loading && (
        <Skeleton />
      )}
    </Layout>
  )
}

ViewMessages.propTypes = {
  items: propTypes.array,
  loading: propTypes.bool,
  showMessage: propTypes.func
}

const Content = styled.div`
  max-width: 800px;
  display: flex;
  margin: auto;
  flex-wrap: wrap;
`
const LoaderContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 40px 0px;
`
export default ViewMessages
