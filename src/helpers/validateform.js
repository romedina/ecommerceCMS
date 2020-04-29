/* eslint-disable no-useless-escape */
export const requires = (objectToValidate, keys) => {
  const errors = keys.filter(uniquekey => {
    if (!objectToValidate[uniquekey]) return true
    return false
  })
  if (errors.length > 0) return errors
  return false
}

export const validateEmail = email => {
  var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
  return !!regex.test(email)
}

export default {
  requires,
  validateEmail
}
