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
        <Alert style={{ marginBottom: '10px' }} severity='error'>{props.errorMessage}</Alert>
      )}
      <Box>
        <Describe>Información de contacto</Describe>
        <Input {...props} name='email' placeholder='Correo electrónico' maxLength={70} />
      </Box>
      <Box>
        <Describe>Dirección de envío</Describe>
        <Grid container>
          <Grid item xs={6} style={{ paddingRight: '10px' }}>
            <Input {...props} name='name' placeholder='Nombre' maxLength={50} />
          </Grid>
          <Grid item xs={6}>
            <Input {...props} name='lastname' placeholder='Apellidos' maxLength={50} />
          </Grid>
          <Input {...props} name='street_number' placeholder='Calle y número' maxLength={100} />
          <Input {...props} name='suburb' placeholder='Colonia' maxLength={50} />
          <Input {...props} name='city' placeholder='Ciudad' maxLength={50} />
          <Grid item xs={6} style={{ paddingRight: '10px' }}>
            <Input {...props} name='state' placeholder='Estado' maxLength={50} />
          </Grid>
          <Grid item xs={6}>
            <Input {...props} name='postal_code' placeholder='Código Postal' filter='number' maxLength={10} />
          </Grid>
          <Input {...props} name='number' placeholder='Tel./cel.' filter='number' maxLength={10} />
        </Grid>
        <Leggend> En caso de que tengamos que contactarte sobre tu pedido</Leggend>
      </Box>
    </Section>
  )
}

UserInfo.propTypes = {
  errors: propTypes.array,
  errorMessage: propTypes.string
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
