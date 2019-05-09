export default (seconds) => {
  let minutes
  if (seconds < 3600) {
    minutes = Math.round(seconds / 60)
    return `${minutes} min`
  }
  const hours = Math.floor(seconds / 3600)
  minutes = Math.round((seconds % 3600) / 60)
  return `${hours} h ${minutes} min`
}
