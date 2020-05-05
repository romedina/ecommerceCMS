import createFlux from '../createFlux'

const flux = createFlux('LOADING')
const initialState = {
  isActive: false,
  message: null
}

export const activeLoading = flux.createAction('ACTIVE_LOADING', (state, payload = null) => {
  return {
    ...state,
    isActive: true,
    message: payload
  }
})

export const hideLoading = flux.createAction('HIDE_LOADING', () => ({ ...initialState }))

export default flux.createReducer(initialState)
