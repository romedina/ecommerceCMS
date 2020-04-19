import { db, firebase } from './firebase'

/**
 * @param data::object
 * @return status::bool
 */
export const add = async data => {
  try {
    await db.collection('contact/messages/items').add({
      ...data,
      date: new Date()
    })
    await db.doc('contact/messages').update({
      counter: firebase.firestore.FieldValue.increment(1)
    })
    return true
  } catch (error) {
    console.error('error_description:', error)
    return false
  }
}

export default {
  add
}
