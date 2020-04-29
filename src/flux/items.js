import createFlux from '../createFlux'
import article from '../modules/article'
import { toObject, toArray } from '../helpers/transformer'

const flux = createFlux('ITEMS')
const initialState = {
  items: {},
  loading: true,
  last: null,
  isfinally: false,
  limit: 10
}

// async actions
export const fetchItems = () => async (dispatch, getState) => {
  dispatch(setLoading(true))
  const state = getState()
  const response = await article.getList(state.items.last, state.items.limit)
  dispatch(setLast(response.last))
  dispatch(addItems(response.items))
  dispatch(setLoading(false))
  if (response.items.length < state.items.limit) dispatch(setFinally(true))
}

export const fetchSpecificItem = (id) => async (dispatch) => {
  dispatch(setLoading(true))
  const response = await article.get(id)
  if (response) {
    dispatch(addItems([response]))
  }
  dispatch(setLoading(false))
}

export const enable = id => async dispatch => {
  dispatch(setStatus({ id, status: true }))
  const status = await article.setActive(id)
  return status
}

export const disable = (id) => async (dispatch) => {
  const status = await article.setInactive(id)
  dispatch(setStatus({ id, status: false }))
  return status
}

// deleteItems
export const deleteItems = (id) => async (dispatch) => {
  await article.delete(id)
  dispatch(deleteItem(id))
}

// actions
export const setStatus = flux.createAction('SET_DISABLE', (state, payload) => {
  const { id, status } = payload
  const itemsDisable = { ...state.items[id], isActive: status }
  const itemsCollection = { ...state.items, [id]: itemsDisable }
  return {
    ...state,
    items: itemsCollection
  }
})

export const addItems = flux.createAction('ADD_ITEMS', (state, payload) => {
  return {
    ...state,
    items: { ...state.items, ...toObject(payload) }
  }
})

export const deleteItem = flux.createAction('DELETE_ITEM', (state, payload) => {
  return {
    ...state,
    items: toObject(toArray(state.items).filter(item => item.id !== payload))
  }
})

export const setLoading = flux.createAction('SET_LOADING', (state, payload) => {
  return {
    ...state,
    loading: payload
  }
})

export const setFinally = flux.createAction('SET_FINALLY', (state, payload) => {
  return {
    ...state,
    isfinally: payload
  }
})

export const setLast = flux.createAction('SET_LAST', (state, payload) => {
  return {
    ...state,
    last: payload
  }
})

export const setInitialState = flux.createAction('SET_INITIAL_STATE', any => ({ ...initialState }))

export default flux.createReducer(initialState)
