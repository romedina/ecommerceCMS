import { db } from './firebase'
import snapshotParser from '../helpers/snapshotparser'

const user = {
  async getData (userId) {
    try {
      const snapshot = await db.doc(`Users/${userId}`).get()
      const data = snapshotParser(snapshot)
      return data
    } catch (error) {
      console.log('error_description:', error)
      return false()
    }
  }
}
export default user
