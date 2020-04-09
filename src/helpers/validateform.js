const validateForm = (objectToValidate, keys) => {
  const errors = keys.filter(uniquekey => {
    if (!objectToValidate[uniquekey]) return true
    return false
  })
  if (errors.length > 0) return errors
  return false
}

export default validateForm