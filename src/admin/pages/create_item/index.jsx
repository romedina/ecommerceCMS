import React, { useState } from 'react'
import View from './view'
import validateForm from '../../../helpers/validateform'
import article from '../../../modules/article'
import propTypes from 'prop-types'
import Admin from '../../hoc/admin'

const CreateItem = (props) => {
  var preloadedState = props.location.state || {}
  const steps = ['Informacion general', 'Multimedia', 'Resumen']
  const [currentStep, setCurrentStep] = useState(0)
  const [data, setData] = useState(preloadedState || {})
  const [errors, setErrors] = useState([])
  const [picture, setPicture] = useState(preloadedState.picture || null)
  const [pictures, setPictures] = useState(preloadedState.pictures || [])
  const [numPicturesUploaded, setPicturesUploaded] = useState(0)
  const [currentView, setCurrenView] = useState('form') // form || loading || success
  const [idCreated, setIdCreated] = useState(null)
  const idEditing = preloadedState.id || null

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

  const handleUpdate = async () => {
    try {
      setCurrenView('loading')
      var counter = 0
      const newPicturesToUpload = pictures.filter(picture => typeof picture !== 'string')
      const urlPersist = pictures.filter(picture => typeof picture === 'string')
      const picturesToDelete = preloadedState.pictures.filter(urlOldPicture => !urlPersist.includes(urlOldPicture))

      // upload new principal picture and delete old
      if (typeof picture !== 'string') {
        const fileToDelete = preloadedState.picture
        const urlPicture = await article.uploadPicture(idEditing, picture, true)
        await article.update(idEditing, { picture: urlPicture })
        await article.deletePicture(idEditing, fileToDelete)
        counter++
        setPicturesUploaded(counter)
      }

      // update new pictures and delete old
      for (const picture of newPicturesToUpload) {
        const url = await article.uploadPicture(idEditing, picture)
        urlPersist.push(url)
        await article.update({ pictures: urlPersist })
        counter++
        setPicturesUploaded(counter)
      }

      // update data
      const { title = '', description = '', sku = '', price = 0 } = data
      const newData = { title, description, sku, price, pictures: urlPersist }
      await article.update(idEditing, newData)

      // delete old pictures
      for (const item of picturesToDelete) {
        article.deletePicture(idEditing, item)
      }
      setCurrenView('success')
    } catch (error) {
      console.error('error_description:', error)
    }
  }

  const handleDropPicture = (ArrayOfpicture) => {
    setPicture(ArrayOfpicture ? ArrayOfpicture[0] : null)
  }

  const handleDropPictures = (ArrayOfpicture = []) => {
    const limit = 10
    const beforeFiles = pictures.filter(pic => typeof pic !== 'string')
    const beforeFilesNme = beforeFiles.map(file => file.name)
    const newFilesFiltered = ArrayOfpicture.filter(file => !beforeFilesNme.includes(file.name))
    const filesMerged = [...pictures, ...newFilesFiltered]
    const filesLimited = filesMerged.filter((item, index) => { return index < limit })
    setPictures(filesLimited)
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
      idEditing={idEditing}
      handleUpdate={handleUpdate}
    />
  )
}

CreateItem.propTypes = {
  location: propTypes.object
}

export default Admin(CreateItem)
