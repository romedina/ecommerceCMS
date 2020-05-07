import React from 'react'
import styled from 'styled-components'
import HeaderSuccess from '../success'
import InstructionSpei from '../instructions_spei'
import Container from '../../../../components/container'

const successStore = props => {
  return (
    <>
      <HeaderSuccess />
      <Content>
        <InstructionSpei {...props} />
      </Content>
    </>
  )
}

const Content = styled(Container)`
  max-width: 800px;
  margin: auto;
`
export default successStore
