import createFlux from '../createFlux'
import article from '../modules/article'

const flux = createFlux('ITEMS')
const initialState = {
  items: [],
  loading: true,
  last: null,
  finally: false,
  limit: 10
}

// async actions
export const fetchItems = () => async (dispatch, getState) => {
  console.log('fetching items...')
  dispatch(setLoading(true))
  const state = getState()
  const response = await article.getList(state.last, state.limit)
  dispatch(addItems(response.items))
  dispatch(setLast(response.last))
  dispatch(setLoading(false))
  if (response.items.length < state.limit) dispatch(setFinally(true))
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
  return {
    ...state,
    items: state.items.map(item => {
      const newItem = { ...item }
      if (payload.id === newItem.id) { newItem.isActive = payload.status }
      return newItem
    })
  }
})

export const addItems = flux.createAction('ADD_ITEMS', (state, payload) => {
  return {
    ...state,
    items: [...state.items, ...payload]
  }
})

export const deleteItem = flux.createAction('SET_ITEMS', (state, payload) => {
  return {
    ...state,
    items: state.items.filter(item => item.id !== payload)
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
    finally: payload
  }
})

export const setLast = flux.createAction('SET_LAST', (state, payload) => {
  return {
    ...state,
    last: payload
  }
})

export default flux.createReducer(initialState)
