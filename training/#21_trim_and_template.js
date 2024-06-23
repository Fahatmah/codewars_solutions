const fiveLine = (s) => {
  let res = ''

  for (let i = 0; i < 5; i++) {
    let fiveLineString = ''
    for (let j = 0; j <= i; j++) fiveLineString += s.trim()
    res += `${fiveLineString}\n`
  }

  return res.trim()
}
