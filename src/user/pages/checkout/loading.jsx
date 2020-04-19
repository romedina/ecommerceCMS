import React from 'react'
import styled from 'styled-components'
import { CircularProgress } from '@material-ui/core'

const Loading = props => {
  return (
    <Content>
      <Loader />
    </Content>
  )
}
const Content = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 75vh;
`
const Loader = styled(CircularProgress)`
  width: 60px!important;
  height: 60px!important;
`
export default Loading
