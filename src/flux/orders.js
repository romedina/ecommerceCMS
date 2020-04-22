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
    loading: false,
    items: {
      ...state.items,
      ...transformer.toObject(payload)
    }
  }
})

export default flux.createReducer(initialSTate)
