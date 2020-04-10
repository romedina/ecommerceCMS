import React from 'react'
import styled from 'styled-components'
import Container from '../../components/LayoutAdmin'
import Stepper from './stepper'
import GeneralInfo from './general_info'
import Multimedia from './multimedia'
import { Typography, Button } from '@material-ui/core'

const View = (props) => {
  return (
    <Container>
      <Content >
        <Title variant='h5'>Subir producto nuevo</Title>
        <Stepper {...props} />
        <GeneralInfo {...props}/>
        <Multimedia {...props}/>
        <ButtonsContainer>
        {props.currentStep + 1 < props.steps.length  && (
          <Button
            onClick={props.handleNext}
            variant='contained'
            color='primary'
            onClick={props.handleNext}>
            {props.steps[props.currentStep + 1]}
          </Button>
        )}
        </ButtonsContainer>
      </Content>    
    </Container>
  )
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
`
const Title = styled(Typography)`
  color: var(--main-blue)
`


export default View