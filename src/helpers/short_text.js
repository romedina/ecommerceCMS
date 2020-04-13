const shortText = (text, limit = 140) => {
  if (text.length <= limit) return text
  const newText = text.slice(0, limit)
  return `${newText}...`
}

export default shortText
