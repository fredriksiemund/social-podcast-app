export default (number) => {
  let shortNumber
  if (number < 1000) {
    return number
  }
  if (number < 100000) {
    shortNumber = Math.round((number / 1000) * 10) / 10
    return `${shortNumber} K`
  }
  if (number < 1000000) {
    shortNumber = Math.round(number / 1000)
    return `${shortNumber} K`
  }
  if (number < 1000000000) {
    shortNumber = Math.round((number / 1000000) * 10) / 10
    return `${shortNumber} mn`
  }
  return number
}
