import React, { useState } from 'react'
import View from './view'

const CreateItem = () => {

  const steps = ['Informacion general', 'Datos especificos', 'Multimedia', 'Resumen']
  const [currentStep, setCurrentStep] = useState(0)
  const { state, setState } = useState({
    title: '',
    description: '',
    price: '',
    sku: '',
    stock: ''
  })

  return (<View 
    {...state}
    setState={setState}
    currentStep={currentStep}
    setCurrentStep={setCurrentStep}
    steps={steps}
  />)
}

export default CreateItem