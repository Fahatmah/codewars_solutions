const maxMin = (arr1, arr2) => {
  let res = []
  for (let i = 0; i < arr1.length; i++)
    arr1[i] < arr2[i]
      ? res.push(arr2[i] - arr1[i])
      : res.push(arr1[i] - arr2[i])

  return [Math.max(...res), Math.min(...res)]
}

console.log(40 - -111)
console.log(-111 - 40)

console.log(maxMin([1, 3, 5], [9, 8, 7])) // [8, 2]
console.log(maxMin([1, 10, 100, 1000], [0, 0, 0, 0])) // [1000, 1]
console.log(maxMin([10, 20, 30, 40], [111, 11, 1, -111])) // [151, 9]

{
  {
    ;('⏎')
  }
}
