import React from 'react'
import styled from 'styled-components'
import ButtonBase from '../../../components/inputs/Button'
import api from '../../../api'
import { func } from 'prop-types'

const Store = props => {
  const onPayClick = async event => {
    props.startProcess()
    const response = await api.payouts.store(false)
    console.log(response)
    props.saveOperation('pending')
    props.endProcess()
  }

  return (
    <Content>
      <Button onClick={onPayClick} variant='contained'>Generar orden de pago</Button>
    </Content>
  )
}
Store.propTypes = {
  startProcess: func,
  endProcess: func,
  saveOperation: func
}

const Button = styled(ButtonBase)`
  width: 220px;
`

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
`

export default Store
