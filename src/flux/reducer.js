import { combineReducers } from 'redux'

// reducers
import session from './session'
import items from './items'

const reducer = combineReducers({
  session,
  items
})

export default reducer
