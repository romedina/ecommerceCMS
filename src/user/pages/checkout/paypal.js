const paypalConfig = props => {
  return {
    createOrder: function (data, actions) {
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: props.totalPrice
          }
        }]
      })
    },
    onApprove: (data, actions) => {
      return actions.order.capture().then((details) => {
        const { id, payer } = details
        props.onApprove({ id, payer })
      })
    }
  }
}

export default paypalConfig
