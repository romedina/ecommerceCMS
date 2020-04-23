import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import { ThemeProvider } from '@material-ui/core'
import Alert from './components/alert'
import Notification from './components/notification'
import mytheme from './theme'
import './index.css'

// pages
import CreateItem from './admin/pages/create_item'
import Login from './admin/pages/login'
import MyArticles from './admin/pages/my_articles'
import Messages from './admin/pages/messages'
import Orders from './admin/pages/orders'
import Order from './admin/pages/order'

import Home from './user/pages/home'
import Item from './user/pages/item'
import MyCart from './user/pages/my_cart'
import Checkout from './user/pages/checkout'
import About from './user/pages/about'
import Contact from './user/pages/contact'

function App () {
  return (
    <ThemeProvider theme={mytheme}>
      <Background>
        <Notification />
        <Alert />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/create-item' component={CreateItem} />
          <Route exact path='/my-articles' component={MyArticles} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/item/:id' component={Item} />
          <Route exact path='/my-cart' component={MyCart} />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/messages' component={Messages} />
          <Route exact path='/orders' component={Orders} />
          <Route exact path='/order/:period/:id' component={Order} />
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
