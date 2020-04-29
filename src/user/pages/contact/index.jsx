import React, { useState } from 'react'
import Layout from '../../components/layout_user'
import ContainerBase from '../../components/container'
import useObjectState from '../../../hooks/useObjectState'
import Form from './form'
import styled from 'styled-components'
import validateForm from '../../../helpers/validateform'
import Loading from './loading'
import Success from './success'
import message from '../../../modules/message'

const Contact = props => {
  const [currentView, setCurrentView] = useState('form') // form || loading || sucess
  const [data, setData] = useObjectState({})
  const [errors, setErrors] = useState({ errors: [], message: null })

  const handleChange = ({ name, value }) => {
    setData({ [name]: value })
  }

  const handleSend = async event => {
    const inputsWithErrors = validateForm.requires(data, ['name', 'email', 'number', 'city_or_state', 'content'])
    if (inputsWithErrors) setErrors({ errors: inputsWithErrors, message: 'Todos los campos son requeridos' })
    else if (!validateForm.validateEmail(data.email)) {
      setErrors({ errors: ['email'], message: 'El correo no es válido' })
    } else {
      setCurrentView('loading')
      await message.add(data)
      setCurrentView('success')
    }
  }

  const handleRemoveErrors = params => {
    const NewErrors = errors.errors.filter(error => error !== params.name)
    setErrors({
      errors: NewErrors,
      message: NewErrors.length > 0 ? errors.message : null
    })
  }

  return (
    <Layout>
      <Container>
        {currentView === 'form' && (
          <Form
            data={data}
            handleChange={handleChange}
            handleSend={handleSend}
            errors={errors.errors}
            errorMessage={errors.message}
            handleRemoveErrors={handleRemoveErrors}
          />
        )}
        {currentView === 'loading' && (<Loading />)}
        {currentView === 'success' && (<Success />)}
      </Container>
    </Layout>
  )
}

const Container = styled(ContainerBase)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
`

export default Contact
