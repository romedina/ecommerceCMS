export const toNumber = (string, maxLength) => {
  var number = string.toString()
  number = number.replace(/[^0-9.]+/g, '')

  // limit character
  if (maxLength && number.length > maxLength) {
    number = number.slice(0, maxLength)
  }

  number = parseInt(number)
  return isNaN(number) ? '' : number
}

export const limit = (string, limit) => {
  return string.toString().slice(0, limit)
}