import { db } from './firebase'
import snapshotParser from '../helpers/snapshotparser'

const user = {
  async getData (user_id) {
    try {
      const snapshot = await db.doc(`Users/${user_id}`).get()
      const data = snapshotParser(snapshot)
      return data
    } catch (error) {
      console.log('error_description:', error)
      return false()
    }
  }
}
export default user
