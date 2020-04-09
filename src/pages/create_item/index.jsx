import React, { useState } from 'react'
import View from './view'
import validateForm from '../../helpers/validateform'

const CreateItem = () => {

  const steps = ['Informacion general', 'Datos especificos', 'Multimedia', 'Resumen']
  const [currentStep, setCurrentStep] = useState(0)
  const [data, setData] = useState({})
  const [errors, setErrors] = useState([])

  const handleChange = ({value, name}) => {
    setData({
      ...data,
      [name]: value
    })
  }

  const handleNext = () => {
    var validate = ['title', 'sku', 'price', 'description', 'stock']
    const errors = validateForm(data, validate)
    if (!errors) {
      setCurrentStep(currentStep + 1)
    } else  {
      setErrors(errors)
    }
  }

  const removeError = ({name}) => {
    if (errors.includes(name)){
      setErrors(errors.filter(error => error != name))
    }
  }

  return (<View 
    {...data}
    errors={errors}
    setData={setData}
    currentStep={currentStep}
    setCurrentStep={setCurrentStep}
    steps={steps}
    handleChange={handleChange}
    handleNext={handleNext}
    removeError={removeError}
  />)
}

export default CreateItem