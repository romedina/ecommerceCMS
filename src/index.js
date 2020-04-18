import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider, useDispatch } from 'react-redux'
import { CssBaseline } from '@material-ui/core'
import store from './store'
import App from './App'

import { setAlert } from './flux/alert'

const Client = props => {
  const dispatch = useDispatch()

  const customUserConfirmation = (message, follow) => {
    dispatch(setAlert({
      action: any => follow(true),
      fallback: any => follow(false),
      title: '¿Seguro quieres salir?',
      message: 'Se perderan todos los datos del formulario'
    }))
  }

  return (
    <BrowserRouter getUserConfirmation={customUserConfirmation}>
      <CssBaseline />
      <App />
    </BrowserRouter>
  )
}

ReactDOM.render(<Provider store={store}><Client /></Provider>, document.getElementById('root'))
