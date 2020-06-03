import { firebase } from './firebase'
import user from './user'

const security = {
  async sessionStart ({ email, password }) {
    try {
      const result = await firebase.auth().signInWithEmailAndPassword(email, password)
      const userData = await user.getData(result.user.uid)
      return userData || { _id: result.user.uid }
    } catch (error) {
      console.error('error_description:', error)
      return false
    }
  },

  async sessionClose () {
    await firebase.auth().signOut()
  }
}

export default security
