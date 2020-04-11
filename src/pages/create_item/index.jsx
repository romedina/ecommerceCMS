import React, { useState } from 'react'
import View from './view'
import validateForm from '../../helpers/validateform'
import { checkPropTypes } from 'prop-types'

const CreateItem = () => {
  const steps = ['Informacion general', 'Multimedia', 'Resumen']
  const [currentStep, setCurrentStep] = useState(0)
  const [data, setData] = useState({})
  const [errors, setErrors] = useState([])
  const [picture, setPicture] = useState(null)
  const [pictures, setPictures] = useState([])

  const handleDropPicture = (ArrayOfpicture) => {
    setPicture(ArrayOfpicture ? ArrayOfpicture[0] : null)
  }

  const handleDropPictures = (ArrayOfpicture = []) => {
    const limit = 10
    const before_files = pictures.filter(pic => typeof pic !== 'string')
    const before_filtes_name = before_files.map(file => file.name)
    const new_files_filtered = ArrayOfpicture.filter(file => !before_filtes_name.includes(file.name))
    const files_merged = [...pictures, ...new_files_filtered]
    const files_limited = files_merged.filter((item, index) => { return index < limit })
    setPictures(files_limited)
  }

  const handleChange = ({ value, name }) => {
    setData({
      ...data,
      [name]: value
    })
  }

  const handleNext = () => {
    var validate = []; var errors = false
    if (currentStep === 0) {
      validate = ['title', 'price']
      errors = validateForm(data, validate)
    } else if (currentStep === 1) {
      validate = ['picture']
      errors = validateForm({ picture }, validate)
    }
    console.log({picture})
    console.log(errors)

    if (!errors) {
      setCurrentStep(currentStep + 1)
    } else {
      setErrors(errors)
    }
  }

  const handleBack = () => {
    setCurrentStep(currentStep - 1)
  }

  const removeError = ({ name }) => {
    if (errors.includes(name)) {
      setErrors(errors.filter(error => error !== name))
    }
  }
  const handleDeletePicture = () => {
    setPicture(null)
  }

  const handleDeletePictures = (picturesSelected) => {
    const persistPictures = pictures.filter(picture => {
      if (typeof picture === 'string') {
        return typeof picturesSelected === 'string' ? picture !== picturesSelected : true
      } else {
        return typeof picturesSelected === 'string' ? true : picturesSelected.name !== picture.name
      }
    })
    setPictures(persistPictures)
  }

  return (
    <View
      {...data}
      errors={errors}
      setData={setData}
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
      steps={steps}
      handleChange={handleChange}
      handleNext={handleNext}
      removeError={removeError}
      handleDropPicture={handleDropPicture}
      handleDropPictures={handleDropPictures}
      handleDeletePictures={handleDeletePictures}
      handleDeletePicture={handleDeletePicture}
      handleBack={handleBack}
      picture={picture}
      pictures={pictures}
    />
  )
}

export default CreateItem
