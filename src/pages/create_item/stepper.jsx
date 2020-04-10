import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components'

const StepLabelStyled = styled(StepLabel)`
  @media screen and (max-width:600px){
    .MuiStepLabel-label.MuiStepLabel-alternativeLabel {
      display: none
    }
  }
`
const ButtonContainer = styled('div')`
  display: flex;
  justify-content: center;
`

export default function StepperComponent(props) {
  return (
    <div >
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