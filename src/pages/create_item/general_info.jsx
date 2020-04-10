import React from 'react'
import { Grid, Box } from '@material-ui/core'
import styled from 'styled-components'
import { TextField } from '@material-ui/core'
import currencyParser from '../../helpers/currency'
import CreateInput from '../../components/input'

const GeneralInfo = (props) => {

  if (props.currentStep !== 0) return null

  return (
    <Content>
      <GroupForm>
        <Label>Nombre del producto</Label>
        <TitleInput
          type='text'
          name='title'
          {...props}
        />
      </GroupForm>
      <GroupForm>
        <Label>¿Cual es el precio de tu producto?</Label>
        <TitleInput
          value={props.price ? currencyParser.toCurrency(props.price) : ''}
          onChange={({name, value}) => props.handleChange({name, value: currencyParser.toNumber(value)})}
          type='text'
          name='price'
          {...props}
        />
      </GroupForm>
      <GroupForm>
        <Label>¿Cual es el precio de tu producto?</Label>
        <TitleInput
          type='textarea'
          name='description'
          {...props}
        />
      </GroupForm>
    </Content>
  )
}


const Content = styled('div')`
  max-width: 600px;
  margin: auto;
`
const GroupForm = styled('div')`
  margin: auto;
  margin-bottom: 20px;
  width: 80%;
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