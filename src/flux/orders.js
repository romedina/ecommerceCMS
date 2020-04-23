import createFlux from '../createFlux'
import transformer from '../helpers/transformer'
import orders from '../modules/orders'

const flux = createFlux('ORDERS')
const initialSTate = {
  items: {},
  loading: true,
  counter: 0
}
export const fetchItems = (period) => async dispatch => {
  console.log('fetching...', period)
  dispatch(setLoading(true))
  const items = await orders.getList(period)
  const newItems = items.map(item => {
    const newItem = { ...item }
    newItem.period = period
    return newItem
  })
  dispatch(addItems(newItems))
}

// actions
export const setLoading = flux.createAction('SET_LOADING', (state, payload) => {
  return {
    ...state,
    loading: true
  }
})

export const addItems = flux.createAction('ADD_ITEMS', (state, payload) => {
  return {
    ...state,
    loading: false,
    items: {
      ...state.items,
      ...transformer.toObject(payload)
    }
  }
})

export const setCounter = flux.createAction('SET_COUNTER', (state, payload) => {
  return {
    ...state,
    counter: payload
  }
})

export default flux.createReducer(initialSTate)
