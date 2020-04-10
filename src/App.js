import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import { ThemeProvider } from '@material-ui/core'
import mytheme from './theme'
import './index.css'

// pages
import CreateItem from './pages/create_item'
import Login from './pages/login'

function App () {
  return (
    <ThemeProvider theme={mytheme}>
      <Background>
        <Switch>
          <Route path='/create-item' component={CreateItem} />
          <Route path='/login' component={Login} />
        </Switch>
      </Background>
    </ThemeProvider>
  )
}

export default App

const Background = styled('div')`
  background: #fff;
  min-height: 100vh;
  width: 100vw;
  max-width: 100%;
  
`
