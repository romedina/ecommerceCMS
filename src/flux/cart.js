import createFlux from '../createFlux'

const initialState = []
const flux = createFlux('CART')

// actions
export const addItem = flux.createAction('ADD_ITEM', (state, payload) => {
  const ItemsOnCart = state.map(item => item.id)
  if (ItemsOnCart.includes(payload.id)) {
    return state.map(item => {
      if (item.id === payload.id) {
        const newItem = { ...item }
        newItem.quantity = (item.quantity + payload.quantity)
        return newItem
      } else {
        return item
      }
    })
  } else {
    return [...state, payload]
  }
})

export const RemoveItem = flux.createAction('REMOVE_ITEM', (state, payload) => {
  const newItems = state.filter(item => item.id !== payload)
  return newItems
})

export const updateQuantity = flux.createAction('UPDATE_QUANTITY', (state, { id, quantity }) => {
  return state.map(item => {
    console.log(id === item.id)
    if (id === item.id) {
      const itemMatched = { ...item }
      itemMatched.quantity = quantity
      return itemMatched
    }
    return item
  })
})

export const setInitialState = flux.createAction('SET_INITIAL_STATE', any => [])

export default flux.createReducer(initialState)
