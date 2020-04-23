import { db } from './firebase'
import snapshotParser from '../helpers/snapshotparser'

export const getList = async (period) => {
  const snap = await db.collection(`Ordenes/Pedidos/${period}`).get()
  return snapshotParser(snap)
}

export const changeStatus = async ({status, id, period}) => {
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

export default {
  getList,
  changeStatus,
  onCounterChange
}
