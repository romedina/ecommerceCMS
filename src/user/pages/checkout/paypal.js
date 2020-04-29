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
      const status = actions.order.capture().then((details) => {
        console.log('execute onAprove paypal')
        const { id, payer } = details
        props.onApprove('payed', { id, payer })
      })
      console.log(status)
      return status
    }
  }
}

export default paypalConfig
