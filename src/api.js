export const payWidthCard = (error) => new Promise(resolve => {
  setTimeout(() => {
    resolve({
      error: error
    })
  }, 1000)
})

export const payWithStore = error => new Promise(resolve => {
  setTimeout(() => {
    resolve({
      id: 't6utz9dywve6zipnppys',
      description: 'Cargo con tienda',
      error_message: null,
      authorization: null,
      amount: 100,
      operation_type: 'in',
      payment_method: {
        type: 'store',
        reference: '123456ABCDEFGHIJLKMNOPQRSTVW010000',
        barcode_url: 'https://sandbox-api.openpay.mx/barcode/123456ABCDEFGHIJLKMNOPQRSTVW010000?width=1&height=45'
      },
      order_id: 'oid-00052',
      transaction_type: 'charge',
      creation_date: '2013-12-05T17:50:09-06:00',
      currency: 'MXN',
      status: 'in_progress',
      method: 'store',
      error: error
    })
  }, 1000)
})

export const payWithSpei = error => new Promise(resolve => {
  setTimeout(() => {
    resolve({
      error,
      id: 't6utz9dywve6zipnppys',
      description: 'Cargo con banco',
      error_message: null,
      authorization: null,
      amount: 100,
      operation_type: 'in',
      payment_method: {
        type: 'bank_transfer',
        bank: 'BBVA Bancomer',
        agreement: '1411217',
        clabe: '00000000000000000000',
        name: '11094690394055678934'
      },
      order_id: 'oid-00051',
      transaction_type: 'charge',
      creation_date: '2013-12-05T17:50:09-06:00',
      currency: 'MXN',
      status: 'in_progress',
      method: 'bank_account'
    })
  }, 1000)
})

export default {
  payouts: {
    card: payWidthCard,
    store: payWithStore
  }
}
