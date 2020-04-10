const sessionPersist = {
  save (state) {
    localStorage.setItem('session', JSON.stringify(state))
  },
  get () {
    var session = localStorage.getItem('session')
    if (!session) return null
    const { name, lastname, id } = JSON.parse(session)
    var sessionState = { logged: true, loading: false, error: false }
    return { ...sessionState, name, lastname, id }
  },
  delete () {
    localStorage.removeItem('session')
  }
}

export default sessionPersist
