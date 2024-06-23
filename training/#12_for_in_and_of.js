const giveMeFive = (obj) => {
  let arr = []
  for (let key in obj) {
    if (key.length === 5) arr.push(key)
    if (obj[key].length === 5) arr.push(obj[key])
  }
  return arr
}
