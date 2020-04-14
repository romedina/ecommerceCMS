import { combineReducers } from 'redux'

// reducers
import session from './session'
import items from './items'
import alert from './alert'

const reducer = combineReducers({
  session,
  items,
  alert
})

export default reducer
