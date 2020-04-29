import React, { useState } from 'react'
import Stepper from './stepper'
import UserInfo from './user_info'
import propTypes from 'prop-types'
import Shipping from './shipping_and_pay'
import validateForm from '../../../helpers/validateform'
import Confirm from './confirm'

const Form = props => {
  const [currentStep, setCurrenStep] = useState(0)
  const steps = ['Información', 'Envío', 'Método de Pago', 'Confirmación']
  const [errors, setErrors] = useState([])

  const handleNext = event => {
    if (steps[currentStep] === 'Información') {
      const requires = ['email', 'name', 'lastname', 'street_number', 'suburb', 'city', 'state', 'number', 'postal_code']
      const errors = validateForm(props.data, requires)
      if (errors) setErrors(errors)
      else setCurrenStep(currentStep + 1)
    }
    if (steps[currentStep] === 'Envío') setCurrenStep(currentStep + 1)
    if (steps[currentStep] === 'Método de Pago') {
      const requires = ['methodPay']
      const errors = validateForm(props.data, requires)
      if (errors) setErrors(errors)
      else setCurrenStep(currentStep + 1)
    }
  }

  const goToStep = (stepName) => {
    setCurrenStep(steps.indexOf(stepName))
  }

  const handleRemoveErrors = (event) => {
    setErrors([])
  }

  const handleChangeDirections = event => {
    setCurrenStep(steps.indexOf('Información'))
  }

  return (
    <>
      <Stepper
        currentStep={currentStep}
        steps={steps}
      />
      {steps[currentStep] === 'Información' && (
        <UserInfo
          errors={errors}
          steps={steps}
          currentStep={currentStep}
          handleNext={handleNext}
          goToStep={goToStep}
          {...props}
          setCurrenStep={setCurrenStep}
          handleRemoveErrors={handleRemoveErrors}
          handleChangeDirections={handleChangeDirections}
        />
      )}
      {(steps[currentStep] === 'Envío' || steps[currentStep] === 'Método de Pago') && (
        <Shipping
          {...props}
          errors={errors}
          steps={steps}
          currentStep={currentStep}
          handleNext={handleNext}
          goToStep={goToStep}
          setCurrenStep={setCurrenStep}
          handleRemoveErrors={handleRemoveErrors}
          handleChangeDirections={handleChangeDirections}
        />
      )}
      {steps[currentStep] === 'Confirmación' && (
        <Confirm
          {...props}
          errors={errors}
          steps={steps}
          currentStep={currentStep}
          handleNext={handleNext}
          goToStep={goToStep}
          setCurrenStep={setCurrenStep}
          handleRemoveErrors={handleRemoveErrors}
          handleChangeDirections={handleChangeDirections}
        />
      )}
    </>
  )
}

Form.propTypes = {
  errors: propTypes.array,
  data: propTypes.object,
  handlePay: propTypes.func
}

export default Form
