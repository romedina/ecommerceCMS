import React from 'react'
import { Dialog, ButtonBase, CircularProgress } from '@material-ui/core'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { action, setInitialState } from '../flux/alert'

const Alert = () => {
  const dispatch = useDispatch()
  const { message, title, active, textAction, loading } = useSelector(state => state.alert)

  const handleAction = () => {
    dispatch(action())
  }

  const handleCancel = () => {
    dispatch(setInitialState())
  }

  return (
    <Dialog open={active}>
      <Box>
        {!loading && (
          <Body>
            <h2>{title || ''}</h2>
            <Describe>{message || ''}</Describe>
            <ButtonContainer>
              <CancelButton onClick={handleCancel} color='warning' variant='outlined'>Cancelar</CancelButton>
              <ActionButton onClick={handleAction} color='warning' variant='contained'>{textAction || 'Aceptar'}</ActionButton>
            </ButtonContainer>
          </Body>
        )}
        {loading && (
          <CircularProgress color='secondary' />
        )}
      </Box>
    </Dialog>
  )
}

const Body = styled.div`
  width: 80vw;
  text-align: center;
  margin: auto;
  @media screen and (max-width: 480px) {
    width: 95vw;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`

const Box = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  min-height: 400px;
  padding: 20px;
  @media screen and (max-width: 600px) {
    width: 100%;
    margin: auto;
    min-height: 300px;
  }
`

const ActionButton = styled(ButtonBase)`
  min-width: 150px;
  padding: 10px;
  border-radius: 5px;
  font-size: 1.1em;
  background: #f28d00;
  color: #fff;
  @media screen and (max-width: 420px) {
    min-width: 45%;
  }
`
const CancelButton = styled(ButtonBase)`
  min-width: 150px;
  padding: 10px;
  border-radius: 5px;
  font-size: 1.1em;
  margin-right: 15px;
  border: 1px solid var(--main-blue);
  @media screen and (max-width: 420px) {
    min-width: 48%;
  }
`
const Describe = styled.p`
  font-size: 1.2em;
`

export default Alert
