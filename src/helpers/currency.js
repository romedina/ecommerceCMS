const currency = {
  toCurrency: (number) => {  
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
  }
}