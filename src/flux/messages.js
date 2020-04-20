import createFlux from '../createFlux'
import message from '../modules/message'

const flux = createFlux('MESSAGES')
const initialState = {
  loading: true,
  items: [],
  isfinally: false,
  last: null,
  counter: 0,
  limit: 20
}

// A S Y N C    A C  T I O  N S
export const fetchItems = any => async (dispatch, getState) => {
  dispatch(setLoading(true))
  const state = getState()
  console.log(state.messages.last)
  const { items, last } = await message.getList(state.messages.last, state.messages.limit)
  dispatch(addMessages({ items, last }))
}

export const updateStatus = id => async dispatch => {
  dispatch(setStatusInactive(id))
  await message.setInactiveStatus(id)
}

export const resetCounter = any => async dispatch => {
  await message.resetCounter()
}

// A C T I O N S
export const setLoading = flux.createAction('SET_LOADING', (state, payload) => {
  return {
    ...state,
    loading: payload
  }
})

export const addMessages = flux.createAction('ADD_MESSAGES', (state, payload) => {
  return {
    ...state,
    items: state.items.concat(payload.items),
    last: payload.last,
    loading: false,
    isfinally: payload.items.length < state.limit
  }
})

export const setCounter = flux.createAction('SET_COUNTER', (state, payload) => {
  return {
    ...state,
    counter: payload
  }
})

export const setStatusInactive = flux.createAction('SET_STATUS_INACTIVE', (state, payload) => {
  return {
    ...state,
    items: state.items.map(item => {
      if (item.id === payload) {
        const newItem = { ...item }
        newItem.isActive = false
        return newItem
      }
      return item
    })
  }
})

export default flux.createReducer(initialState)
