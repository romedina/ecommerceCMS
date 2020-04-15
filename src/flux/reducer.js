import { combineReducers } from 'redux'

// reducers
import session from './session'
import items from './items'
import alert from './alert'
import cart from './cart'

const reducer = combineReducers({
  session,
  items,
  alert,
  cart
})

export default reducer
