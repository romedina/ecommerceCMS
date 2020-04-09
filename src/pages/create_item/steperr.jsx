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

  const handleBack = () => {
    props.setCurrentStep((currentStep) => currentStep - 1);
  };

  const handleReset = () => {
    props.setCurrentStep(0);
  };

  return (
    <div >
      <Stepper activeStep={props.currentStep} alternativeLabel>
        {props.steps.map((label) => (
          <Step key={label}>
            <StepLabelStyled>{label}</StepLabelStyled>
          </Step>
        ))}
      </Stepper>

      {props.currentStep === props.steps.length && (
        <div>
          <Typography>All steps completed</Typography>
          <Button onClick={handleReset}>Reset</Button>
        </div>
      )}
      {props.currentStep != props.steps.length && (
        <ButtonContainer>
          <Button disabled={props.currentStep === 0} onClick={handleBack}>
            Back
          </Button>
          <Button variant="contained" color="primary" onClick={props.handleNext}>
            {props.currentStep === props.steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </ButtonContainer>
      )}
    </div>
  )
}