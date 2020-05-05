export const payWidthCard = (error) => new Promise(resolve => {
  setTimeout(() => {
    resolve({
      error: error
    })
  }, 1000)
})

export default {
  payouts: {
    card: payWidthCard
  }
}
