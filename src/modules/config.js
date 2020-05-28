import { db } from './firebase'
import snapshotParser from '../helpers/snapshotparser'

export const getConfig = async () => {
  try {
    const snap = await db.doc('config/main').get()
    if (!snap.exists) return false
    const config = snapshotParser(snap)
    return config
  } catch (error) {
    return false
  }
}

export const updateOrderViewType = async viewType => {
  try {
    var currenTConfig = await getConfig()
    currenTConfig = currenTConfig || {}
    const ordersConfig = currenTConfig.orders || {}
    const newState = {
      ...currenTConfig,
      orders: {
        ...ordersConfig,
        type: viewType
      }
    }
    await db.doc('config/main').set(newState)
  } catch (error) {
    console.error(error)
  }
}

export default {
  getConfig,
  updateOrderViewType
}
