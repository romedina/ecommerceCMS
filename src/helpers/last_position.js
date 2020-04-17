const lastPosition = latest => {
  const scrolled = window.scrollY
  const viewportHeight = window.innerHeight
  const fullHeight = document.getElementById('root').clientHeight
  if ((scrolled + viewportHeight + latest) < fullHeight) return false
  return true
}

export default lastPosition
