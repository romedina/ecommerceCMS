const sumPrice = items => {
  const price = items.reduce((acumulator, currentItem) => {
    return acumulator + (currentItem.price * currentItem.quantity)
  }, 0)
  return price
}

export default sumPrice
