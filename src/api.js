import axios from 'axios'
import { apiBaseUrl } from './config'

const connect = async config => {
  try {
    const defautlConfig = {
      method: 'post'
    }
    const response = await axios({ ...defautlConfig, ...config, url: `${apiBaseUrl}${config.url}` })
    return response.data
  } catch (error) {
    console.log(error.response.data)
    return error.response.data
  }
}

export const payWidthCard = data => {
  return connect({
    url: '/charges',
    data
  })
}

export const payWithStore = data => {
  return connect({
    url: '/charges',
    data
  })
}

export const payWithSpei = data => {
  return connect({
    url: '/charges',
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
