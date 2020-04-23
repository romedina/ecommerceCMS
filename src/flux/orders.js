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

export const updateViewed = info => async dispatch => {
  await orders.setViewed(info)
  dispatch(setViewed(info.id))
}

export const setStatus = info => async dispatch => {
  const operationStatus = await orders.changeStatus(info)
  if (operationStatus) {
    dispatch(fetchItems(info.period))
    return true
  } else {
    return false
  }
}

// actions
export const setLoading = flux.createAction('SET_LOADING', (state) => {
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

export const setViewed = flux.createAction('SET_VIEWED', (state, payload) => {
  const newItem = { ...state.items[payload] }
  newItem.isViewed = true
  return {
    ...state,
    items: { ...state.items, [payload]: newItem }
  }
})


export default flux.createReducer(initialSTate)
