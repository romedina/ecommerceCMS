/* eslint-disable camelcase */
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

export const create = async ({ tax = '', email, name, lastname, street_number, suburb, city, state, postal_code, number, subTotal, shipping, totalPrice, methodPay, itemsOncart }) => {
  try {
    const items = itemsOncart.map(item => {
      const { id, price, quantity, sku, title, picture } = item
      return { id, price, quantity, sku, title, picture }
    })
    const date = new Date()
    const period = `${date.getMonth() + 1}-${date.getFullYear()}`
    const result = await db.collection(`Ordenes/Pedidos/${period}`).add({
      isViewed: false,
      items,
      subTotal,
      shipping,
      totalPrice,
      date,
      methodPay,
      tax,
      user: { email, name, lastname, number },
      shipTo: { street_number, suburb, city, state, postal_code }
    })
    await db.doc(`Ordenes/Pedidos/${period}/${result.id}`).update({ id: result.id })
    return result.id
  } catch (error) {
    console.error('error_description:', error)
    return false
  }
}

export const success = async ({ id, status = 'pending', meta = {}, notific = null }) => {
  try {
    const date = new Date()
    const period = `${date.getMonth() + 1}-${date.getFullYear()}`
    await db.doc(`Ordenes/Pedidos/${period}/${id}`).update({ status, meta })
    if (notific) await db.doc('Ordenes/Pedidos').update({ counter: firebase.firestore.FieldValue.increment(1) })
    return true
  } catch (error) {
    console.error('error_description:', error)
    return false
  }
}

export const failed = async id => {
  try {
    const date = new Date()
    const period = `${date.getMonth() + 1}-${date.getFullYear()}`
    await db.doc(`Ordenes/Pedidos/${period}/${id}`).delete()
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
  create,
  success,
  failed
}
