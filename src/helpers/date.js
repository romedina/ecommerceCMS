export const toString = date => {
  const day = date.getDate()
  const month = date.getMonth()
  const year = date.getFullYear()

  const esMonths = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  return `${day} / ${esMonths[month]} / ${year}`
}
