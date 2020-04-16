import { useState } from 'react'

const useObjectState = initialState => {
  const [state, setState] = useState(initialState || {})

  const handleSetState = newSTate => {
    setState({
      ...state,
      ...newSTate
    })
  }

  return [state, handleSetState]
}

export default useObjectState
