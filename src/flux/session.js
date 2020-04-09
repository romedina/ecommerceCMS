import createFlux from '../createFlux'

const initial_state = {
  logged: false,
  loading: true,
  name: null,
  last_name: null,
  id: null,
}

const flux = createFlux('SESSION')

export default flux.createReducer(initial_state)