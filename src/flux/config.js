import createFlux from '../createFlux'
import stateFromStorage from '../helpers/state_from_storage'
import config from '../modules/config'

const flux = createFlux('CONFIG')
const initialState = stateFromStorage('config', {
  orders: {
    type: 'list'
  }
})

export const getConfig = () => async (dispatch, getState) => {
  const data = await config.getConfig()
  console.log('data', data)
  if (data) dispatch(setOrderType(data.orders.type))
}

export const updateOrderType = viewType => dispatch => {
  config.updateOrderViewType(viewType)
  dispatch(setOrderType(viewType))
}

export const setOrderType = flux.createAction('SET_ORDER_TYPE', (state, payload) => {
  return {
    ...state,
    orders: {
      ...state.orders,
      type: payload
    }
  }
})

export const set = flux.createAction('SET', (state, payload) => {
  return {
    ...state,
    ...payload
  }
})

export default flux.createReducer(initialState)
