import { firebase } from './firebase'
import user from './user'

const security = {
  async sessionStart ({ email, password }) {
    try {
      const result = await firebase.auth().signInWithEmailAndPassword(email, password)
      console.log(result)
      const userData = await user.getData(result.user.uid)
      return userData || { name: 'anonimo' }
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
