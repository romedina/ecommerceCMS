import createFlux from '../createFlux'
import security from '../modules/security'
import sessionPersist from '../helpers/sessionPersist'

const flux = createFlux('SESSION')
const initial_state = {
  logged: false,
  loading: false,
  name: null,
  lastname: null,
  id: null,
  error: false
}

// async actions
export const start = ({ password, email }) => async (dispatch) => {
  dispatch(setLoading(true))
  const data = await security.sessionStart({ password, email })
  if (data) {
    dispatch(setData({ ...data, id: data._id }))
    sessionPersist.save({ ...data, id: data._id })
  } else {
    dispatch(setError(true))
    setTimeout(() => dispatch(setError(false)), 8000)
  }
}

// actions
const setLoading = flux.createAction('LOADING', (state, payload) => {
  return {
    ...state,
    loading: payload
  }
})

const setError = flux.createAction('SET_ERROR', (state, payload) => {
  return payload
    ? { ...state, error: true, loading: false }
    : { ...state, error: false }
})

const setData = flux.createAction('SET_DATA', (state, payload) => {
  const { name, lastname, id } = payload
  return {
    ...state,
    logged: true,
    loading: false,
    name,
    lastname,
    id
  }
})

export default flux.createReducer(initial_state)
