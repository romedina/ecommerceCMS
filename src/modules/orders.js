import { db } from './firebase'

export const getMonths = async () => {
  const snap = await db.doc('Ordenes/Pedidos').collection()
  return snap
}

export default {
  getMonths
}
