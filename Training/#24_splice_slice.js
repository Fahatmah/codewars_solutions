const threeInOne = (arr) => {
  let sumValue = []
  for (let i = 0; i < arr.length; i += 3) sumValue.push(arr.slice(i, i + 3))
  return sumValue.map((arr) => arr.reduce((a, b) => a + b, 0))
}

console.log(threeInOne([1, 2, 3])) // [6]
console.log(threeInOne([1, 2, 3, 4, 5, 6])) // [6,15]
console.log(threeInOne([1, 2, 3, 4, 5, 6, 7, 8, 9])) // [6,15,24]

{
  {
    ;('⏎')
  }
}
