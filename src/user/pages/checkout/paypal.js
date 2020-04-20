export const createOrder = value => (data, actions) => {
  return actions.order.create({
    purchase_units: [{
      amount: {
        value,
        currency: 'MXN'
      }
    }]
  })
}
