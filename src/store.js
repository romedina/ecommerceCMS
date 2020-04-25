import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'
import { logger } from 'redux-logger'
import reducer from './flux/reducer'
import sessionPersist from './helpers/sessionPersist'
import syncCart from './reduxMiddlewares/cart'

const initialState = {}
const session = sessionPersist.get()
if (session) initialState.session = session

// eslint-disable-next-line no-undef
const cart = localStorage.getItem('cart')
if (cart) initialState.cart = JSON.parse(cart)

// creando store
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(ReduxThunk, logger, syncCart))
)

export const dispatch = store.dispatch

export default store
