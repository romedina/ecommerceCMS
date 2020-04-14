import React from 'react'
import { ButtonBase, MobileStepper as MobileStepperBase } from '@material-ui/core'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import styled from 'styled-components'
import { coverPictures } from '../../../config'
const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

function Cover () {
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = coverPictures.length

  const handleNext = () => {
    setActiveStep((prevActiveStep) => maxSteps > (prevActiveStep + 1) ? prevActiveStep + 1 : 0)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep > 1 ? prevActiveStep - 1 : maxSteps - 1)
  }

  const handleStepChange = (step) => {
    setActiveStep(step)
  }

  return (
    <FullWidth>
      <AutoPlaySwipeableViews
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {coverPictures.map((step, index) => (
          <Picture src={step.imgPath} alt={step.label} key={step.imgPath} />
        ))}
      </AutoPlaySwipeableViews>
      <ContainerStepper>
        <MobileStepper
          steps={maxSteps}
          position='static'
          variant='dots'
          activeStep={activeStep}
        />
      </ContainerStepper>
      <ButtonWrapperNext onClick={handleNext}>
        <ArrowNext />
      </ButtonWrapperNext>
      <ButtonWrapperBack onClick={handleBack}>
        <ArroBack />
      </ButtonWrapperBack>
    </FullWidth>
  )
}

const Picture = styled.img`
  width: 100%;
  min-height: 400px;
  height: 400px;
  object-fit: cover;
  @media screen and (max-width:900px) { height: 300px; min-height: 300px; }
`
const FullWidth = styled('div')`
  position: relative;
`

const ArrowNext = styled(KeyboardArrowRight)`

`
const ArroBack = styled(KeyboardArrowLeft)`

`
const ButtonWrapperBase = styled(ButtonBase)`
  background: var(--user-gray);
  position: absolute;
  top: calc(50% - 12px);
  z-index: 2;
  padding: 7px;
  border-radius: 50%;
`
const ButtonWrapperNext = styled(ButtonWrapperBase)`
  right: 20px;
`
const ButtonWrapperBack = styled(ButtonWrapperBase)`
  left: 20px;
`
const MobileStepper = styled(MobileStepperBase)`
  background: none;
`
const ContainerStepper = styled.div`
  width: 100%;
  bottom: 10px;
  position: absolute;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Cover
