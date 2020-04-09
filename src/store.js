import { createStore, applyMiddleware } from 'redux'
import reducer from './flux/reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'
import { logger } from 'redux-logger'


// creando store
var store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(ReduxThunk, logger))
)

export default store