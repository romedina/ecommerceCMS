export const toObject = array => {
  const result = array.reduce((acumulator, currentElement) => {
    acumulator[currentElement.id] = { ...currentElement }
    return acumulator
  }, {})
  return result
}

export const toArray = object => {
  const result = Object.keys(object).map(key => object[key])
  return result
}

export default {
  toObject,
  toArray
}
