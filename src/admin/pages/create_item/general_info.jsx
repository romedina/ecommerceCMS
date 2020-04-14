import React from 'react'
import styled from 'styled-components'
import currencyParser from '../../../helpers/currency'
import CreateInput from '../../components/input'
import { Alert } from '@material-ui/lab'
import { Fade } from '@material-ui/core'
import propTypes from 'prop-types'

const GeneralInfo = (props) => {
  if (props.currentStep !== 0) return null

  return (
    <Content>
      <Fade in={props.errors.length !== 0}>
        <GroupForm>
          <Alert severity='error'>Algunos campos son necesarios</Alert>
        </GroupForm>
      </Fade>
      <GroupForm>
        <Label>Nombre del producto</Label>
        <TitleInput
          type='text'
          name='title'
          {...props}
        />
      </GroupForm>
      <GroupForm>
        <Label>SKU</Label>
        <TitleInput
          type='text'
          name='sku'
          {...props}
        />
      </GroupForm>
      <GroupForm>
        <Label>¿Cual es el precio de tu producto?</Label>
        <TitleInput
          value={props.price ? currencyParser.toCurrency(props.price) : ''}
          onChange={({ name, value }) => props.handleChange({ name, value: currencyParser.toNumber(value) })}
          type='text'
          name='price'
          {...props}
        />
      </GroupForm>
      <GroupForm>
        <Label>Descripcion del producto</Label>
        <TitleInput
          type='textarea'
          name='description'
          maxLength={240}
          {...props}
        />
      </GroupForm>
    </Content>
  )
}

GeneralInfo.propTypes = {
  errors: propTypes.array,
  currentStep: propTypes.number,
  price: propTypes.number,
  handleChange: propTypes.func
}

const Content = styled('div')`
  max-width: 600px;
  margin: auto;
`
const GroupForm = styled('div')`
  margin: auto;
  margin-bottom: 20px;
  width: 80%;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`
const Label = styled('div')`
  color: var(--main-blue-dark);
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 1.1em;
`
const TitleInput = styled(CreateInput)`
  width: 100%;
  .MuiTextField-root{
    color: red
  }
`

export default GeneralInfo
