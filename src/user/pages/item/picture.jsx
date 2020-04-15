import React from 'react'
import styled from 'styled-components'
import { ButtonBase, MobileStepper as MobileStepperBase } from '@material-ui/core'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import propTypes from 'prop-types'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const PictureViewer = props => {
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = props.pictures.length

  const handleNext = () => {
    setActiveStep((prevActiveStep) => maxSteps > (prevActiveStep + 1) ? prevActiveStep + 1 : 0)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep > 1 ? prevActiveStep - 1 : maxSteps - 1)
  }

  const handleStepChange = (step) => {
    setActiveStep(step)
  }

  const handleThumbSelect = (evenet) => {
    console.log(evenet.target.id)
    setActiveStep(parseInt(evenet.target.id))
  }

  return (
    <>
      <PicturesContainer>
        <WidthLimiter>
          <AutoPlaySwipeableViews index={activeStep} onChangeIndex={handleStepChange} enableMouseEvents>
            {props.pictures.map(step => (
              <Picture key={step} src={step} alt={step} />
            ))}
          </AutoPlaySwipeableViews>
        </WidthLimiter>
        <ContainerStepper>
          <MobileStepper steps={maxSteps} position='static' variant='dots' activeStep={activeStep} />
        </ContainerStepper>
        <ButtonWrapperNext onClick={handleNext}><ArrowNext /></ButtonWrapperNext>
        <ButtonWrapperBack onClick={handleBack}><ArroBack /></ButtonWrapperBack>
      </PicturesContainer>
      <WidthLimiter>
        <ThumbList>
          {props.pictures.map((picture, index) => (
            <Thumb
              onClick={handleThumbSelect}
              id={index}
              src={picture}
              key={picture}
              selected={props.pictures[activeStep] === picture}
            />
          ))}
        </ThumbList>
      </WidthLimiter>
    </>
  )
}

PictureViewer.propTypes = {
  pictures: propTypes.array
}
const Thumb = styled.img`
  min-height: 50px;
  border-radius: 5px;
  width: 13%;
  margin-right: 7px;
  object-fit: cover;
  border: ${props => props.selected === true ? '2px solid var(--main-blue)' : 'none'};
`

const ThumbList = styled.div`
  display: flex;
  justify-content: flex-start;
  overflow-x: hidden;
`

const WidthLimiter = styled.div`
  width: 80%;
  margin: auto;
  @media screen and (max-width:900px) {
    width: 100%
  }
`

const Picture = styled.img`
  width: 100%;
  min-height: 300px;
  height: 300px;
  object-fit: cover;
  @media screen and (max-width:900px) { height: 300px; min-height: 300px; }
`
const PicturesContainer = styled('div')`
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
  right: 0px;
  @media screen and (max-width:900px) {
    right: 10px
  }
`
const ButtonWrapperBack = styled(ButtonWrapperBase)`
  @media screen and (max-width:900px) {
    left: 10px;
  }
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
export default PictureViewer
