import React, { useState } from 'react'
import View from './view'
import validateForm from '../../helpers/validateform'
import article from '../../modules/article'

const CreateItem = () => {
  const steps = ['Informacion general', 'Multimedia', 'Resumen']
  const [currentStep, setCurrentStep] = useState(0)
  const [data, setData] = useState({})
  const [errors, setErrors] = useState([])
  const [picture, setPicture] = useState(null)
  const [pictures, setPictures] = useState([])
  const [numPicturesUploaded, setPicturesUploaded] = useState(0)
  const [currentView, setCurrenView] = useState('form') // form || loading || success
  const [idCreated, setIdCreated] = useState(null)

  var numPicturesToUpload = pictures.filter(item => typeof item !== 'string').length
  numPicturesToUpload = typeof picture === 'string' ? numPicturesToUpload : numPicturesToUpload + 1

  const handleUpload = async () => {
    setCurrenView('loading')
    var counter = 0
    const urlPictures = []
    const id = await article.upload(data)
    setIdCreated(id)
    const urlPicture = await article.uploadPicture(id, picture, true)
    await article.update(id, { picture: urlPicture })
    counter++
    setPicturesUploaded(counter)
    for (const pic of pictures) {
      const url = await article.uploadPicture(id, pic)
      urlPictures.push(url)
      await article.update(id, { pictures: urlPictures })
      counter++
      setPicturesUploaded(counter)
    }
    setCurrenView('success')
  }

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

  const onReset = () => {
    setData({})
    setCurrenView('form')
    setCurrentStep(0)
    setErrors([])
    setPicture(null)
    setPictures([])
    setPicturesUploaded(0)
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
      currentView={currentView}
      setCurrenView={setCurrenView}
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
      handleUpload={handleUpload}
      numPicturesUploaded={numPicturesUploaded}
      numPicturesToUpload={numPicturesToUpload}
      idCreated={idCreated}
      setIdCreated={setIdCreated}
      onReset={onReset}
    />
  )
}

export default CreateItem
