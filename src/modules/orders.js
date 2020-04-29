import { db, firebase } from './firebase'
import snapshotParser from '../helpers/snapshotparser'

export const getList = async (period) => {
  const snap = await db.collection(`Ordenes/Pedidos/${period}`).orderBy('date', 'desc').get()
  return snapshotParser(snap)
}

export const setViewed = async ({ id, period }) => {
  try {
    await db.doc(`/Ordenes/Pedidos/${period}/${id}`).update({ isViewed: true })
    await db.doc('Ordenes/Pedidos').update({
      counter: firebase.firestore.FieldValue.increment(-1)
    })
    return true
  } catch (error) {
    console.error('error_description:', error)
    return false
  }
}

export const changeStatus = async ({ status, id, period }) => {
  try {
    await db.doc(`/Ordenes/Pedidos/${period}/${id}`).update({ status })
    return true
  } catch (error) {
    console.error('error_description:', error)
    return false
  }
}

export const onCounterChange = handler => {
  const unsubscribe = db.doc('Ordenes/Pedidos').onSnapshot(snap => {
    const data = snapshotParser(snap)
    handler(data.counter)
  })
  return unsubscribe
}

export const save = async (data) => {
  try {
    const date = new Date()
    const period = `${date.getMonth() + 1}-${date.getFullYear()}`
    const result = await db.collection(`Ordenes/Pedidos/${period}`).add({ ...data, date })
    await db.doc(`Ordenes/Pedidos/${period}/${result.id}`).update({ id: result.id })
    await db.doc('Ordenes/Pedidos').update({ counter: firebase.firestore.FieldValue.increment(1) })
    return result.id
  } catch (error) {
    console.error('error_description:', error)
    return false
  }
}

export default {
  getList,
  changeStatus,
  onCounterChange,
  setViewed,
  save
}
