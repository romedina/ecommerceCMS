import React from 'react'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import styled from 'styled-components'
import { array, number } from 'prop-types'

const StepLabelStyled = styled(StepLabel)`
  @media screen and (max-width:600px){
    .MuiStepLabel-label.MuiStepLabel-alternativeLabel {
      display: none
    }
  }
`

export default function StepperComponent (props) {
  return (
    <div>
      <Stepper activeStep={props.currentStep} alternativeLabel>
        {props.steps.map((label) => (
          <Step key={label}>
            <StepLabelStyled>{label}</StepLabelStyled>
          </Step>
        ))}
      </Stepper>
    </div>
  )
}
StepperComponent.propTypes = {
  currentStep: number,
  steps: array
}
