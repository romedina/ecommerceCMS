import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, CircularProgress, Fade, OutlinedInput } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { useDispatch, useSelector } from 'react-redux'
import { start } from '../../../flux/session'
import { Visibility, VisibilityOff } from '@material-ui/icons'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPasword, setShowPasword] = useState(false)
  const { loading, error } = useSelector(state => state.session)
  const dispatch = useDispatch()

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const onSubmit = event => {
    event.preventDefault()
    dispatch(start({ email, password }))
  }

  return (
    <FullWidth>
      <Content id='content'>
        {loading && (
          <CircularProgress />
        )}
        {!loading && (
          <Form onSubmit={onSubmit}>
            <Fade in={error}>
              <Alert severity='error'>Correo o contraseña incorrecta</Alert>
            </Fade>
            <Box>
              <InputGroup>
                <Label>Ingresa tu correo electrónico</Label>
                <OutlinedInputStyled
                  placeholder='nombre@mail.com'
                  type='text'
                  fullWidth
                  value={email}
                  onChange={handleEmailChange}
                />
              </InputGroup>
              <InputGroup>
                <Label>Contraseña</Label>
                <OutlinedInputStyled
                  placeholder='contraseña'
                  type={showPasword ? 'text' : 'password'}
                  fullWidth
                  value={password}
                  onChange={handlePasswordChange}
                  endAdornment={showPasword ? <Visibility onClick={e => setShowPasword(false)} /> : <VisibilityOff onClick={e => setShowPasword(true)} />}
                />
              </InputGroup>
              <InputGroup>
                <Button type='submit' variant='contained' color='primary'>Entrar</Button>
              </InputGroup>
            </Box>
          </Form>
        )}
      </Content>
    </FullWidth>
  )
}

const FullWidth = styled.div`
  background: var(--background);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width:480px){
    background: #fff;
  }
`

const Content = styled('div')`
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`
const InputGroup = styled('div')`
  margin-bottom: 15px;
`
const Label = styled('div')`
  color: var(--main-blue-dark);
  font-weight: bold;
  margin-bottom: 10px;
`
const OutlinedInputStyled = styled(OutlinedInput)`
  .MuiOutlinedInput-notchedOutline {
    border: 1px solid;
    ${props => !props.error ? 'border-color: var(--main-blue)!important' : ''}
  }
  .MuiInputBase-root {
    border-color: var(--main-blue)!important
  }
  .MuiOutlinedInput-root:hover{
    border-color: var(--main-blue)!important
  }
  .MuiOutlinedInput-input{
    color: var(--main-blue)
  }
`
const Form = styled('form')`
  width: 70%;
  max-width: 500px;
  font-size: 1.2em;
  @media screen and (max-width:1000px){
    width: 90%;
  }
`

const Box = styled.div`
  margin-top: 10px;
  padding: 50px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 10px 10px 50px #9e9e9e5e;
  @media screen and (max-width:480px){
    box-shadow: none;
    padding: 10px;
  }
`

export default Login
