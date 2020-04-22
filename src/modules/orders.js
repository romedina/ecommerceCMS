import { db } from './firebase'
import snapshotParser from '../helpers/snapshotparser'

export const getList = async (period) => {
  const snap = await db.collection(`Ordenes/Pedidos/${period}`).get()
  return snapshotParser(snap)
}

export default {
  getList
}
