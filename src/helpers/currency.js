const currency = {
  toCurrency: (number) => {
    if (!number) return ''
    let stringParsed = number.toString()
    stringParsed = stringParsed.replace(/,/g, '')
    stringParsed = stringParsed.replace('$', '')
    stringParsed = stringParsed.replace(/[a-zA-Z]/g, '')
    stringParsed = stringParsed.replace(' ', '')
    if (stringParsed.length === 0) return ''
    stringParsed = parseInt(stringParsed)
    stringParsed = stringParsed > 9999999 ? 9999999 : stringParsed

    const formatter = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumSignificantDigits: 7
    })
    stringParsed = formatter.format(stringParsed)
    return `$ ${stringParsed}`
  },

  toNumber: (string) => {
    if (!string) return null
    let stringParsed = string
    stringParsed = stringParsed.replace(/,/g, '')
    stringParsed = stringParsed.replace('$', '')
    stringParsed = stringParsed.replace(' ', '')
    stringParsed = stringParsed.replace(/[a-zA-Z]/g, '')
    if (stringParsed === '') return null
    stringParsed = parseInt(stringParsed)
    stringParsed = stringParsed > 9999999 ? 9999999 : stringParsed
    return stringParsed
  },

  formatMoney: (amount, decimalCount = 2, decimal = '.', thousands = ',') => {
    try {
      decimalCount = Math.abs(decimalCount)
      decimalCount = isNaN(decimalCount) ? 2 : decimalCount
      const negativeSign = amount < 0 ? '-' : ''
      const i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString()
      const j = (i.length > 3) ? i.length % 3 : 0
      return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : '')
    } catch (e) {
      console.log(e)
      return 0
    }
  }
}

export default currency
