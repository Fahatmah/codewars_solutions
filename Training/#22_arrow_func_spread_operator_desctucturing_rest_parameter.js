const shuffleIt = (arr, ...num) => {
  num.forEach((els) => {
    ;[arr[els[0]], arr[els[1]]] = [arr[els[1]], arr[els[0]]]
  })
  return arr
}
