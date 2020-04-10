import { firebase } from './firebase'
import user from './user'

const security = {
  async sessionStart ({ email, password }) {
    try {
      const result = await firebase.auth().signInWithEmailAndPassword(email, password)
      const user_data = await user.getData(result.user.uid)
      return user_data
    } catch (error) {
      console.error('error_description:', error)
      return false
    }
  }
}

export default security
