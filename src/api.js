import axios from 'axios'

const connect = async config => {
  const defautlConfig = {
    method: 'post'
  }
  const response = await axios({ ...defautlConfig, ...config })
  return response.data
}

export const payWidthCard = data => {
  return connect({
    url: 'https://us-central1-somos-marketplace.cloudfunctions.net/charges',
    data
  })
}

export const payWithStore = data => {
  return connect({
    url: 'https://us-central1-somos-marketplace.cloudfunctions.net/charges',
    data
  })
}

export const payWithSpei = data => {
  return connect({
    url: 'https://us-central1-somos-marketplace.cloudfunctions.net/charges',
    data
  })
}

export default {
  payouts: {
    card: payWidthCard,
    store: payWithStore,
    spei: payWithSpei
  }
}
