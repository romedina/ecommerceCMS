export const toString = date => {
  const day = date.getDate()
  const month = date.getMonth()
  const year = date.getFullYear()

  const es_months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  return `${day} / ${es_months[month]} / ${year}`
}