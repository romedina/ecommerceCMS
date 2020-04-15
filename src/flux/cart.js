import createFlux from '../createFlux'

const initialState = []
const flux = createFlux('CART')

// actions
export const addItem = flux.createAction('ADD_ITEM', (state, payload) => {
  return [
    ...state,
    payload
  ]
})

export const RemoveItem = flux.createAction('REMOVE_ITEM', (state, payload) => {
  const newItems = state.filter(item => item.id !== payload)
  return newItems
})

export default flux.createReducer(initialState)
