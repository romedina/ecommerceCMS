import React from 'react'
import styled from 'styled-components'
import HeaderSuccess from '../success'
import InstructionSpei from '../instructions_spei'

const successStore = props => {
  return (
    <Content>
      <HeaderSuccess />
      <InstructionSpei {...props} />
    </Content>
  )
}

const Content = styled.div`
  max-width: 800px;
  margin: auto;
`
export default successStore
