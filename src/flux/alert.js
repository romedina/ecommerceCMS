import createFlux from '../createFlux'

const flux = createFlux('ALERT')
const initialState = {
  loading: false,
  active: false,
  action: null,
  message: null,
  title: null,
  type: 'warning',
  textAction: 'Aceptar'
}

export const setInitialState = flux.createAction('SET_INITIAL_STATE', () => {
  return { ...initialState }
})

export const setAlert = flux.createAction('SET_ALERT', (state, payload) => {
  return {
    ...state,
    ...payload,
    active: true
  }
})

export const setLoading = flux.createAction('SET_LOADING', (state, payload) => {
  return {
    ...state,
    loading: payload
  }
})

export const action = () => async (dispatch, getState) => {
  const state = getState()
  dispatch(setLoading(true))
  await dispatch(state.alert.action)
  dispatch(setInitialState())
}

export default flux.createReducer(initialState)
