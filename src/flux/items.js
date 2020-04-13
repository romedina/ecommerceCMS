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

// actions
export const addItems = flux.createAction('ADD_ITEMS', (state, payload) => {
  return {
    ...state,
    items: [...state.items, ...payload]
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
