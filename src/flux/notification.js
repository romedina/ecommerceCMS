import createFlux from '../createFlux'

const flux = createFlux('notifications')
const initialState = []

// async
export const remove = key => dispatch => {
  dispatch(setClose(key))
  setTimeout(event => dispatch(setRemove(key)), 700)
}

export const setNotification = data => async dispatch => {
  const key = Math.floor(Math.random() * 100)
  dispatch(addNotification({ ...data, key }))
  setTimeout(event => dispatch(remove(key)), 5000)
}

export const addNotification = flux.createAction('SET_NOTIFICATION', (state, payload) => {
  return [{ ...payload, open: true }, ...state]
})

// actions
export const setClose = flux.createAction('SET_CLOSE', (state, payload) => {
  return state.map(item => {
    if (item.key === payload) {
      const newItem = { ...item }
      newItem.open = false
      return newItem
    } else {
      return item
    }
  })
})

export const setRemove = flux.createAction('REMOVE', (state, payload) => {
  return state.filter(item => item.key !== payload)
})

export default flux.createReducer(initialState)
