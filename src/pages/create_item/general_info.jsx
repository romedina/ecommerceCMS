import React from 'react'
import { Grid, Box } from '@material-ui/core'
import styled from 'styled-components'
import { TextField } from '@material-ui/core'
import currencyParser from '../../helpers/currency'


const Content = styled('div')`
  max-width: 600px;
  margin: auto;
`

const TextFieldStyled = styled(TextField)`
  margin-bottom: 10px;
`

const GeneralInfo = (props) => {

  if (props.currentStep !== 0) return null

  return (
    <Content>
      <TextFieldStyled
        onClick={event => props.removeError(event.target)}
        name='title'
        value={props.title || ''}
        onChange={(event) => props.handleChange(event.target)}
        label="Titulo"
        variant='outlined'
        fullWidth
        inputProps={{maxLength: 80}}
        error={props.errors.includes('title')}
      />
      <TextFieldStyled
        onClick={event => props.removeError(event.target)}
        inputProps={{maxLength: 80}}
        name='sku'
        value={props.sku || ''}
        onChange={(event) => props.handleChange(event.target)}
        label="sku"
        variant='outlined'
        fullWidth
        error={props.errors.includes('sku')}
      />
      <TextFieldStyled
        onClick={event => props.removeError(event.target)}
        name='price'
        value={currencyParser.toCurrency(props.price) || ''}
        onChange={event => props.handleChange({name: event.target.name, value: currencyParser.toNumber(event.target.value)})}
        label="precio"
        variant='outlined'
        fullWidth
        error={props.errors.includes('price')}
      />
      <TextFieldStyled
        onClick={event => props.removeError(event.target)}
        type='number'
        inputProps={{max: 99, min: 0}}
        name='stock'
        value={props.stock || ''}
        onChange={(event) => props.handleChange(event.target)}
        label="Stock"
        variant='outlined'
        fullWidth
        error={props.errors.includes('stock')}
      />
      <TextFieldStyled
        onClick={event => props.removeError(event.target)}
        inputProps={{maxLength: 240}}
        name='description'
        value={props.description || ''}
        onChange={(event) => props.handleChange(event.target)}
        label="Descripcion"
        variant='outlined'
        fullWidth
        multiline={true}
        error={props.errors.includes('description')}
      />
    </Content>
  )
}

export default GeneralInfo