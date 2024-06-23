const colorOf = (r, g, b) => {
  let hexColor = '#'
  return (hexColor += `${('0' + r.toString(16)).slice(-2)}${(
    '0' + g.toString(16)
  ).slice(-2)}${('0' + b.toString(16)).slice(-2)}`)
}
