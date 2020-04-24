import React, { useState } from 'react'
import Stepper from './stepper'
import UserInfo from './user_info'
import propTypes from 'prop-types'
import Shipping from './shipping_and_pay'
import validateForm from '../../../helpers/validateform'
import Confirm from './confirm'

const Form = props => {
  const [currentStep, setCurrenStep] = useState(0)
  const steps = ['Informacion', 'Envio', 'Metodo de pago', 'Confirmacion']
  const [errors, setErrors] = useState([])

  const handleNext = event => {
    if (steps[currentStep] === 'Informacion') {
      const requires = ['email', 'name', 'lastname', 'street_number', 'suburb', 'city', 'state', 'number', 'postal_code']
      const errors = validateForm(props.data, requires)
      if (errors) setErrors(errors)
      else setCurrenStep(currentStep + 1)
    }
    if (steps[currentStep] === 'Envio') setCurrenStep(currentStep + 1)
    if (steps[currentStep] === 'Metodo de pago') {
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
    setCurrenStep(steps.indexOf('Informacion'))
  }

  return (
    <>
      <Stepper
        currentStep={currentStep}
        steps={steps}
      />
      {steps[currentStep] === 'Informacion' && (
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
      {(steps[currentStep] === 'Envio' || steps[currentStep] === 'Metodo de pago') && (
        <Shipping
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
      {steps[currentStep] === 'Confirmacion' && (
        <Confirm
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
    </>
  )
}

Form.propTypes = {
  errors: propTypes.array,
  data: propTypes.object,
  handlePay: propTypes.func
}

export default Form
