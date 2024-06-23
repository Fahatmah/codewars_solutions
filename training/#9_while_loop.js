const padIt = (str, n) => {
  let startingNum = 0
  while (startingNum < n)
    str = startingNum++ % 2 === 0 ? (str = '*' + str) : (str += '*')
  return str
}
