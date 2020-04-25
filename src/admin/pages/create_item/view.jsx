import React from 'react'
import styled from 'styled-components'
import Container from '../../components/layout_admin'
import Stepper from './stepper'
import GeneralInfo from './general_info'
import Multimedia from './multimedia'
import { Typography, Button } from '@material-ui/core'
import propTypes from 'prop-types'
import Summary from './summary'
import Loading from './loading'
import Success from './success'

const View = (props) => {
  const handleClick = () => {
    if (props.idEditing) props.handleUpdate()
    else (props.handleUpload())
  }

  return (
    <Container title='Nuevo Producto'>
      <Content>
        {props.currentView === 'form' && (
          <>
            <Title variant='h5'>Subir producto nuevo</Title>
            <Stepper {...props} />
            <GeneralInfo {...props} />
            <Multimedia {...props} />
            <Summary {...props} />
            <ButtonsContainer>
              <ButtonStyled disabled={props.currentStep === 0} onClick={props.handleBack} variant='outlined'>
                Atras
              </ButtonStyled>
              {props.currentStep + 1 < props.steps.length && (
                <ButtonStyled onClick={props.handleNext} variant='contained' color='primary'>
                  {props.steps[props.currentStep + 1]}
                </ButtonStyled>
              )}
              {props.steps[props.currentStep] === 'Resumen' && (
                <ButtonStyled onClick={handleClick} variant='contained' color='primary'>
                  {props.idEditing ? 'Guardar' : 'publicar'}
                </ButtonStyled>
              )}
            </ButtonsContainer>
          </>
        )}
        {props.currentView === 'loading' && (
          <Loading {...props} />
        )}
        {props.currentView === 'success' && (
          <Success {...props} />
        )}
      </Content>
    </Container>
  )
}
View.propTypes = {
  currentStep: propTypes.number,
  handleNext: propTypes.func,
  handleBack: propTypes.func,
  steps: propTypes.array,
  handleUpload: propTypes.func,
  currentView: propTypes.string,
  idEditing: propTypes.string,
  handleUpdate: propTypes.func
}

const Content = styled('div')`
  width: 80%;
  margin: auto;
  @media screen and (max-width:900px) {
    width: 100%
  }
`

const ButtonsContainer = styled('div')`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
  @media screen and (max-width:500px){
    justify-content: center;
  }
`

const Title = styled(Typography)`
  color: var(--main-blue);
`
const ButtonStyled = styled(Button)`
  min-width: 120px;
  margin-right: 20px;
  @media screen and (max-width:500px){
    &:last-of-type{
      margin-right: 0px;
    }
  }
`

export default View
