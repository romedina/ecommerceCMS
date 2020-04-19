/* eslint-disable react/jsx-handler-names */
import React from 'react'
import styled from 'styled-components'
import InputBase from '../../pages/checkout/input'
import propTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import ButtonBase from '../../components/button'
import { Alert as AlertBase } from '@material-ui/lab'

const Form = props => {
  return (
    <Content container>
      {props.errors.length > 0 && (
        <Grid item xs={12}>
          <Alert severity='error'>Todos los campos son requeridos</Alert>
        </Grid>
      )}
      <Grid item xs={12}>
        <Input
          errors={props.errors}
          handleRemoveErrors={props.handleRemoveErrors}
          placeholder='Nombre'
          data={props.data}
          handleChange={props.handleChange}
          name='name'
        />
      </Grid>
      <GridSpacing item xs={12} md={6}>
        <Input
          errors={props.errors}
          handleRemoveErrors={props.handleRemoveErrors}
          placeholder='Correo electronico'
          data={props.data}
          handleChange={props.handleChange}
          name='email'
        />
      </GridSpacing>
      <Grid item xs={12} md={6}>
        <Input
          errors={props.errors}
          handleRemoveErrors={props.handleRemoveErrors}
          placeholder='Tel./cel.'
          data={props.data}
          handleChange={props.handleChange}
          name='number'
        />
      </Grid>
      <Grid item xs={12}>
        <Input
          data={props.data}
          handleChange={props.handleChange}
          name='city_or_state'
          errors={props.errors}
          handleRemoveErrors={props.handleRemoveErrors}
          placeholder='Ciudad o estado'
        />
      </Grid>
      <Grid item xs={12}>
        <Input
          data={props.data}
          handleChange={props.handleChange}
          name='content'
          errors={props.errors}
          handleRemoveErrors={props.handleRemoveErrors}
          placeholder='Comentario'
          multiline
          rows={5}
        />
      </Grid>
      <Button handleClick={props.handleSend} variant='contained'>Enviar</Button>
    </Content>
  )
}

Form.propTypes = {
  data: propTypes.object,
  handleChange: propTypes.func,
  handleSend: propTypes.func,
  errors: propTypes.array,
  handleRemoveErrors: propTypes.func
}

const Content = styled(Grid)`
  max-width: 600px;
  width: 100%;
  margin: auto;
`
const Input = styled(InputBase)`
  margin-bottom: 20px;
  background: var(--user-gray-light);
`
const GridSpacing = styled(Grid)`
  @media screen and (min-width:960px) {
    padding-right: 10px;
  }
`

const Button = styled(ButtonBase)`
  width: 160px;
`
const Alert = styled(AlertBase)`
  margin-bottom: 15px;
`
export default Form
