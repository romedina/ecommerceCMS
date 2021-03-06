import { db, firebase } from './firebase'
import snapshotParser from '../helpers/snapshotparser'

/**
 * @param data::object
 * @return status::bool
 */
export const add = async data => {
  try {
    const { id } = await db.collection('contact/messages/items').add({
      ...data,
      isActive: true,
      date: new Date()
    })
    await db.doc(`contact/messages/items/${id}`).update({ id })
    try {
      await db.doc('contact/messages').update({
        counter: firebase.firestore.FieldValue.increment(1)
      })
    } catch (error) {
      await db.doc('contact/messages').set({
        counter: firebase.firestore.FieldValue.increment(1)
      })
    }
    return true
  } catch (error) {
    console.error('error_description:', error)
    return false
  }
}

/**
 * @param last::firebaseDocument, limit::number
 * @return items::array
 */
export const getList = async (last, limit) => {
  try {
    var query = db.collection('contact/messages/items').orderBy('date', 'desc')
    if (last) query = query.startAfter(last)
    if (limit) query = query.limit(limit)
    const snap = await query.get()
    const items = snapshotParser(snap)
    return { items, last: snap.docs[snap.docs.length - 1] }
  } catch (error) {
    console.error('error_description:', error)
    return []
  }
}

export const onCounterCHange = handler => {
  const unsubscribe = db.doc('contact/messages').onSnapshot(snap => {
    console.log('snap', snap)
    const data = snapshotParser(snap)
    handler(data ? data.counter : 0)
  })
  return unsubscribe
}

export const resetCounter = async any => {
  await db.doc('contact/messages').update({
    counter: 0
  })
}

export const setInactiveStatus = async id => {
  try {
    await db.doc(`contact/messages/items/${id}`).update({ isActive: false })
    return true
  } catch (error) {
    console.error('error_description', error)
    return false
  }
}

export default {
  add,
  getList,
  onCounterCHange,
  resetCounter,
  setInactiveStatus
}
