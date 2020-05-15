/* eslint-disable camelcase */
import React, { useState } from 'react'
import View from './view'
import useObjectState from '../../../hooks/useObjectState'
import orders from '../../../modules/orders'
import { useSelector } from 'react-redux'
import { setInitialState } from '../../../flux/cart'
import sumPrice from '../../../helpers/sumPrice'
import { activeLoading, hideLoading } from '../../../flux/loading'
import { dispatch } from '../../../store'
import { useHistory } from 'react-router-dom'
import validateForm from '../../../helpers/validateform'
import api from '../../../api'
import { taxPorcent, shipping } from '../../../config'

const { validateCardNumber, validateCVC, validateExpiry } = window.OpenPay.card

const Checkout = props => {
  const history = useHistory()
  const itemsOncart = useSelector(state => state.cart)
  const [data, setData] = useObjectState({})
  const [currentStep, setCurrenStep] = useState(0)
  const [input, setInputError] = useObjectState({ errors: [], message: null })

  const steps = ['Información de envío', '¿Cómo quieres pagar?', 'Datos de la tarjeta', 'Confirmación']
  const subTotal = sumPrice(itemsOncart)
  const tax = Math.ceil((subTotal + shipping) * (taxPorcent / 100))
  const totalPrice = subTotal + shipping + tax

  const onAnyInputChange = event => {
    setData({ [event.target.name]: event.target.value })
  }

  const goToStep = step => event => {
    setCurrenStep(step)
  }

  const successOperation = async ({ notific = null, id, successData, metadata, status }) => {
    await orders.success({ id, metadata, status, notific })
    endProcess()
    history.push('/success', { ...successData, methodPay: data.methodPay })
    dispatch(setInitialState())
  }

  const failedOperation = async id => {
    await orders.failed(id)
    endProcess()
    setCurrenStep(1)
  }

  const saveOperation = async () => {
    startProcess()
    const idCreated = await orders.create({
      ...data,
      subTotal,
      shipping,
      totalPrice,
      tax,
      itemsOncart
    })
    return idCreated
  }

  const handleNext = event => {
    window.scrollTo(0, 0)

    if (currentStep === 0) {
      const requires = ['email', 'name', 'lastname', 'street_number', 'suburb', 'city', 'state', 'number', 'postal_code']
      const inputWidthErrors = validateForm.requires(data, requires)
      if (inputWidthErrors) setInputError({ errors: inputWidthErrors, message: 'Todos los campos son requeridos' })
      else if (!validateForm.validateEmail(data.email)) {
        setInputError({ errors: ['email'], message: 'El correo no es válido' })
      } else if (data.number.toString().length < 6) {
        setInputError({ errors: ['number'], message: 'El número de contacto no es válido' })
      } else setCurrenStep(currentStep + 1)
    }

    if (currentStep === 1) {
      const requires = ['methodPay']
      const inputWidthErrors = validateForm.requires(data, requires)
      if (inputWidthErrors) return setInputError({ errors: inputWidthErrors, message: 'Porfavor selecciona un método de pago' })
      if (data.methodPay === 'card') return setCurrenStep(currentStep + 1)
      setCurrenStep(currentStep + 2)
    }

    if (currentStep === 2) {
      const inputsEmpties = validateForm.requires(data, ['card_year', 'card_month', 'card_number', 'card_cvv', 'card_name'])
      if (inputsEmpties) {
        return setInputError({ message: 'Todos los campos son requeridos', errors: inputsEmpties })
      }
      if (!validateCardNumber(data.card_number)) {
        return setInputError({
          errors: ['card_number'],
          message: 'El número de la tarjeta no es valido'
        })
      }
      if (!validateCVC(data.card_cvv)) {
        return setInputError({
          errors: ['card_cvv'],
          message: 'El código de seguridad no es válido'
        })
      }
      if (!validateExpiry(data.card_month, data.card_year)) {
        return setInputError({
          errors: ['card_month', 'card_year'],
          message: 'La fecha de vencimiento no es válida'
        })
      }
      return setCurrenStep(currentStep + 1)
    }
  }

  const onAnyInputFocus = event => {
    const newErrors = input.errors.filter(error => (event.target.name || event.target.id) !== error)
    const NewErrorMessage = newErrors.length ? input.message : null
    setInputError({
      errors: newErrors,
      message: NewErrorMessage
    })
  }

  const onConfirm = event => {
    if (data.methodPay === 'card') return payWidthCard()
    if (data.methodPay === 'cash') return payWithStore()
    if (data.methodPay === 'spei') return payWithSpei()
  }

  const payWidthCard = () => {
    const deviceSessionId = window.OpenPay.deviceData.setup()
    startProcess()
    window.OpenPay.token.create({
      card_number: data.card_number,
      holder_name: data.card_name,
      expiration_year: data.card_year,
      expiration_month: data.card_month,
      cvv2: data.card_cvv
    },
    async response => {
      var idCreated = await saveOperation()
      try {
        const token = response.data.id
        var payStatus = await api.payouts.card({
          pId: idCreated,
          iva: tax,
          subtotal: totalPrice.toString(),
          method: 'card',
          deviceId: deviceSessionId,
          description: 'checkout',
          token,
          name: data.card_name,
          phone: data.number,
          mail: data.email,
          amount: totalPrice.toString()
        })

        if (payStatus.error_code) {
          setInputError({ message: 'No se pudo realizar el pago, intentalo nuevamente con otro método de pago' })
          failedOperation(idCreated)
        } else if (payStatus.charge) {
          successOperation({ id: idCreated, metadata: response, status: 'payed' })
        }
      } catch (error) {
        setInputError({ message: 'No se pudo realizar el pago, intentalo nuevamente con otro método de pago' })
        failedOperation(idCreated)
      }
    },
    () => {
      setInputError({ message: 'Pago incorrecto, intentelo de nuevo' })
      setCurrenStep(1)
      endProcess()
    }
    )
  }

  const payWithStore = async () => {
    var idCreated = await saveOperation()
    try {
      const response = await api.payouts.store({
        pId: idCreated,
        iva: tax,
        subtotal: totalPrice.toString(),
        method: 'store',
        deviceId: window.OpenPay.deviceData.setup(),
        description: 'checkout',
        name: data.name,
        phone: data.number,
        mail: data.email,
        amount: totalPrice.toString()
      })
      if (!response.error_code) {
        return successOperation({ nitific: true, id: idCreated, successData: response.charge, metadata: null, status: 'pending' })
      }
      failedOperation(idCreated)
      setInputError({ message: 'Error, intenta con un método diferente' })
    } catch (error) {
      failedOperation(idCreated)
      setInputError({ message: 'Error, intenta con un método diferente' })
    }
  }

  const payWithSpei = async () => {
    var idCreated = await saveOperation()
    try {
      const response = await api.payouts.spei({
        pId: idCreated,
        iva: tax,
        subtotal: totalPrice.toString(),
        method: 'bank_account',
        deviceId: window.OpenPay.deviceData.setup(),
        description: 'checkout',
        name: data.name,
        phone: data.number,
        mail: data.email,
        amount: totalPrice.toString()
      })
      if (!response.error_code) {
        return successOperation({ notific: true, id: idCreated, successData: response.charge, metadata: null, status: 'pending' })
      }
      failedOperation(idCreated)
      setInputError({ message: 'Error, intenta con un método diferente' })
    } catch (error) {
      failedOperation(idCreated)
      setInputError({ message: 'Error, intenta con un método diferente' })
    }
  }

  const startProcess = () => dispatch(activeLoading('Estamos procesando tu pago, porfavor espere un momento...'))
  const endProcess = () => dispatch(hideLoading())

  return (
    <View
      onFocus={onAnyInputFocus}
      startProcess={startProcess}
      endProcess={endProcess}
      data={data}
      state={data}
      onChange={onAnyInputChange}
      saveOperation={saveOperation}
      shipping={shipping}
      totalPrice={totalPrice}
      subTotal={subTotal}
      currentStep={currentStep}
      goToStep={goToStep}
      steps={steps}
      errors={input.errors}
      setErrors={setInputError}
      handleNext={handleNext}
      errorMessage={input.message}
      itemsOncart={itemsOncart}
      onConfirm={onConfirm}
      successOperation={successOperation}
      failedOperation={failedOperation}
      tax={tax}
    />
  )
}

export default Checkout
