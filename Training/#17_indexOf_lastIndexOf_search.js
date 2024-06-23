const firstToLast = (str, c) => {
  let strings = str.split('').filter((s) => s === c)

  return strings.length === 1
    ? 0
    : strings.length > 1
    ? str.lastIndexOf(c) - str.indexOf(c)
    : -1
}
