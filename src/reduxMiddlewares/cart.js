/* eslint-disable no-undef */
// sync the cart state with window storage
const syncCart = store => next => action => {
  next(action)
  if (action.type.includes('CART')) {
    const { cart } = store.getState()
    localStorage.setItem('cart', JSON.stringify(cart))
  }
}

export default syncCart
