import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'
import { logger } from 'redux-logger'
import reducer from './flux/reducer'
import sessionPersist from './helpers/sessionPersist'

const session = sessionPersist.get()
const initialState = {}
if (session) initialState.session = session

// creando store
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(ReduxThunk, logger))
)

export default store
