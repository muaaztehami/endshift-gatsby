const dispplayDate = date => {
  var m =
    date.getMonth() > 8
      ? "" + (date.getMonth() + 1)
      : "0" + (date.getMonth() + 1)
  var d = date.getDate() > 9 ? date.getDate() : "0" + date.getDate()
  var y = date.getFullYear()

  return m + "." + d + "." + y
}
export default dispplayDate
