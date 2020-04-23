import React from 'react'
import styled from 'styled-components'
import { Paper } from '@material-ui/core'

const Itme = props => {
  return (
    <Content>
      <Picture src={props.picture}/>
    </Content>
  )
}

const Content = styled(Paper)`
  
`
const Picture = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
`

export default Itme
