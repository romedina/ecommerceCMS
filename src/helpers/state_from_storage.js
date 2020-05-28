const stateFromStorage = (moduleName, fallbackState) => {
  try {
    const preloadedState = window.localStorage.getItem(moduleName)
    const state = JSON.parse(preloadedState)
    return state || fallbackState
  } catch (error) {
    console.log(fallbackState)
    return fallbackState
  }
}

export default stateFromStorage
