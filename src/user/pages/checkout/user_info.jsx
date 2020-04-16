import React from 'react'
import styled from 'styled-components'
import Section from './Sections'
import InputBase from './input'
import { Grid } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import propTypes from 'prop-types'

const UserInfo = props => {
  return (
    <Section {...props}>
      {props.errors.length > 0 && (
        <Alert style={{ marginBottom: '10px' }} severity='error'>Todos los campos son requeridos</Alert>
      )}
      <Box>
        <Describe>Informacionde contacto</Describe>
        <Input {...props} name='email' placeholder='Correo electronico' />
      </Box>
      <Box>
        <Describe>Direccion de envio</Describe>
        <Grid container>
          <Grid item xs={6} style={{ paddingRight: '10px' }}>
            <Input {...props} name='name' placeholder='Nombre' />
          </Grid>
          <Grid item xs={6}>
            <Input {...props} name='lastname' placeholder='apellidos' />
          </Grid>
          <Input {...props} name='street_number' placeholder='Calle y numero' />
          <Input {...props} name='suburb' placeholder='Colonia' />
          <Input {...props} name='city' placeholder='Ciudad' />
          <Grid item xs={6} style={{ paddingRight: '10px' }}>
            <Input {...props} name='state' placeholder='Estado' />
          </Grid>
          <Grid item xs={6}>
            <Input {...props} name='postal_code' placeholder='Codigo postal' />
          </Grid>
          <Input {...props} name='number' placeholder='Tel./cel.' />
        </Grid>
        <Leggend> En caso de que tengamos que contactarte sobre tu pedido</Leggend>
      </Box>
    </Section>
  )
}

UserInfo.propTypes = {
  errors: propTypes.array
}

const Box = styled.div`
  border-radius: 5px;
  background: var(--user-gray-light);
  padding: 10px;
  margin-bottom: 10px;
`
const Describe = styled.div`
  font-weight: bold;
  font-size: 1.2em;
  margin-bottom: 8px;
`
const Input = styled(InputBase)`
  margin-bottom: 10px;
  margin-right: ${props => props.marginRight || '0px'};
`
const Leggend = styled.div`
  font-size: 1em;
  font-style: italic;
`

export default UserInfo
