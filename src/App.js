import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import { ThemeProvider } from '@material-ui/core'
import Alert from './components/alert'
import mytheme from './theme'
import './index.css'

// pages
import CreateItem from './admin/pages/create_item'
import Login from './admin/pages/login'
import MyArticles from './admin/pages/my_articles'

import Home from './user/pages/home'

function App () {
  return (
    <ThemeProvider theme={mytheme}>
      <Background>
        <Alert />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/create-item' component={CreateItem} />
          <Route path='/my-articles' component={MyArticles} />
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
