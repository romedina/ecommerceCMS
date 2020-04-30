import createFlux from '../createFlux'

const flux = createFlux('SEARCH')

const initialState = {
  query: '',
  isActive: false
}

export const setQuery = flux.createAction('SET_QUERY', (state, payload) => {
  return {
    ...state,
    query: payload
  }
})

export const setActive = flux.createAction('SET_ACTIVE', (state, payload) => {
  return {
    ...state,
    isActive: payload
  }
})

export default flux.createReducer(initialState)
