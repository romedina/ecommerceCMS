import React from 'react'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import styled from 'styled-components'
import propTypes from 'prop-types'

const StepperComponent = props => {
  return (
    <Content>
      <Stepper activeStep={props.currentStep} alternativeLabel>
        {props.steps.map((label) => (
          <Step key={label}>
            <StepLabelStyled>{label}</StepLabelStyled>
          </Step>
        ))}
      </Stepper>
    </Content>
  )
}

StepperComponent.propTypes = {
  currentStep: propTypes.number,
  steps: propTypes.array
}

const Content = styled.div`
  & .MuiPaper-root {
    background-color: initial!important;
  }
  margin-bottom: 25px;
`

const StepLabelStyled = styled(StepLabel)`
  @media screen and (max-width:600px){
    .MuiStepLabel-label.MuiStepLabel-alternativeLabel {
      display: none
    }
  }
`

export default StepperComponent
