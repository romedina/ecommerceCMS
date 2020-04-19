import React from 'react'
import styled from 'styled-components'
import { CircularProgress } from '@material-ui/core'

const Loading = props => {
  return (
    <Icon />
  )
}

const Icon = styled(CircularProgress)`
  width: 60px!important;
  height: 60px!important;
`

export default Loading
