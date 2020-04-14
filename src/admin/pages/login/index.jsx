import React, { useState } from 'react'
import styled from 'styled-components'
import LayoutAdmin from '../../components/layout_admin'
import CreateInput from '../../components/input'
import { Button, CircularProgress, Fade } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { useDispatch, useSelector } from 'react-redux'
import { start } from '../../../flux/session'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { loading, error } = useSelector(state => state.session)
  const dispatch = useDispatch()

  const handleEmailChange = ({ value }) => {
    setEmail(value)
  }

  const handlePasswordChange = ({ value }) => {
    setPassword(value)
  }

  const handleClick = () => {
    dispatch(start({ email, password }))
  }

  return (
    <LayoutAdmin>
      <Content>
        {loading && (
          <CircularProgress />
        )}
        {!loading && (
          <Box>
            <Fade in={error}>
              <Alert severity='error'>Correo o contraseña incorrecta</Alert>
            </Fade>
            <InputGroup>
              <Label>Ingresa tu correo Electronico</Label>
              <CreateInputStyled
                placeholder='nombre@mail.com'
                type='text'
                fullWidth
                value={email}
                onChange={handleEmailChange}
              />
            </InputGroup>
            <InputGroup>
              <Label>Contraseña</Label>
              <CreateInputStyled
                placeholder='contraseña'
                type='password'
                fullWidth
                value={password}
                onChange={handlePasswordChange}
              />
            </InputGroup>
            <InputGroup>
              <Button onClick={handleClick} variant='contained' color='primary'>Entrar</Button>
            </InputGroup>
          </Box>
        )}
      </Content>
    </LayoutAdmin>
  )
}

const Content = styled('div')`
  min-height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CreateInputStyled = styled(CreateInput)`
  margin-bottom: 20px;
`
const InputGroup = styled('div')`
  
`
const Label = styled('div')`
  color: var(--main-blue-dark);
  font-weight: bold;
  margin-bottom: 10px;
`

// const Title = styled('h4')`
//   color: var(--main-blue-dark);
//   padding: 0px;
//   margin: 0px;
// `

const Box = styled('div')`
  width: 40%;
  font-size: 1.2em;
  @media screen and (max-width:1000px){
    width: 70%;
  }
  @media screen and (max-width:1000px){
    width: 90%;
  }
`

export default Login
