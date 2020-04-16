import React, { useState } from 'react'
import Stepper from './stepper'
import UserInfo from './user_info'
import propTypes from 'prop-types'
import Shipping from './shipping'
import validateForm from '../../../helpers/validateform'

const Form = props => {
  const [currentStep, setCurrenStep] = useState(0)
  const steps = ['Informacion', 'Envio', 'Pago']
  const [errors, setErrors] = useState([])

  const handleNext = event => {
    if (steps[currentStep] === 'Informacion') {
      const requires = ['email', 'name', 'lastname', 'street_number', 'suburb', 'city', 'state', 'number', 'postal_code']
      const errors = validateForm(props.data, requires)
      if (errors) {
        setErrors(errors)
      } else {
        setCurrenStep(currentStep + 1)
      }
    }
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
          handleNext={handleNext}
          {...props}
          setCurrenStep={setCurrenStep}
          handleRemoveErrors={handleRemoveErrors}
        />
      )}
      {steps[currentStep] === 'Envio' && (
        <Shipping
          errors={errors}
          handleNext={handleNext}
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
  data: propTypes.object
}

export default Form
