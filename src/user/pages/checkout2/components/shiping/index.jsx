import React from 'react'
import { Content, Box, Input, Leggend } from './styled'
import { Grid } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { array, string } from 'prop-types'

const Shipping = props => {
  return (
    <Content>
      <Box>
        {!!props.errorMessage && (
          <Alert style={{ marginBottom: '10px' }} severity='error'>{props.errorMessage}</Alert>
        )}
        <Grid container>
          <Grid item xs={6} style={{ paddingRight: '10px' }}>
            <Input {...props} name='name' placeholder='Nombre' maxlength={50} />
          </Grid>
          <Grid item xs={6}>
            <Input {...props} name='lastname' placeholder='Apellidos' maxlength={50} />
          </Grid>
          <Input {...props} name='email' placeholder='Correo electrónico' maxlength={70} />
          <Input {...props} name='street_number' placeholder='Calle y número' maxlength={100} />
          <Input {...props} name='suburb' placeholder='Colonia' maxlength={50} />
          <Input {...props} name='city' placeholder='Ciudad' maxlength={50} />
          <Grid item xs={6} style={{ paddingRight: '10px' }}>
            <Input {...props} name='state' placeholder='Estado' maxlength={50} />
          </Grid>
          <Grid item xs={6}>
            <Input {...props} name='postal_code' placeholder='Código Postal' filter='number' maxlength={10} />
          </Grid>
          <Input {...props} name='number' placeholder='Tel./cel.' filter='number' maxlength={10} />
        </Grid>
        <Leggend> En caso de que tengamos que contactarte sobre tu pedido</Leggend>
      </Box>
    </Content>
  )
}

Shipping.propTypes = {
  errors: array,
  errorMessage: string
}

export default Shipping
