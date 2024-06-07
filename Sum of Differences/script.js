sumOfDifferences = (arr) => {
  let sortedArray = arr.sort((a, b) => b - a)
  let sum = 0
  for (let i = 0; i < sortedArray.length - 1; i++) {
    sum += sortedArray[i] - sortedArray[i + 1]
  }
  return sum
}

console.log(
  sumOfDifferences([1, 2, 4, -4, -2, 0, 4, -3, 0, 0, -5, -3, 2, -1, -3, -5])
) // 9
console.log(sumOfDifferences([13, -10, -12, -7, -13, -5, 14, 5, 4, 12, 14])) // 27
console.log(sumOfDifferences([-17, 17])) // 34
console.log(sumOfDifferences([2, 1, 10])) // 9
console.log(sumOfDifferences([1, 2, 10])) // 9
console.log(sumOfDifferences([-3, -2, -1])) // 2
