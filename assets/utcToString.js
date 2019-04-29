export default (utc) => {
  const currentTime = new Date().getTime() - utc
  let time
  if (currentTime < 60000) {
    return 'Right now'
  }
  if (currentTime < 3600000) {
    time = Math.floor(currentTime / 60000)
    return `${time} min ago`
  }
  if (currentTime < 86400000) {
    time = Math.floor(currentTime / 3600000)
    return `${time} h ago`
  }
  if (currentTime < 604800000) {
    time = Math.floor(currentTime / 86400000)
    if (time === 1) return `${time} day ago`
    return `${time} days ago`
  }
  return new Date(utc).toDateString()
}
