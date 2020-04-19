import createFlux from '../createFlux'
import message from '../modules/message'
import { db } from '../modules/firebase'

const flux = createFlux('MESSAGES')
const initialState = {
  loading: true,
  items: [],
  isFinally: false,
  last: null,
  counter: 0,
  limit: 2
}

// ASYNC ACTIONS
export const fetchItems = any => async (dispatch, getState) => {
  dispatch(setLoading(true))
  const state = getState()
  const { items, last } = await message.getList(state.messages.last, state.messages.limit)
  dispatch(addMessages({ items, last }))
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
    isFinally: payload.items.length < state.limit
  }
})

export const setCounter = flux.createAction('SET_COUNTER', (state, payload) => {
  return {
    ...state,
    counter: payload
  }
})

export default flux.createReducer(initialState)
