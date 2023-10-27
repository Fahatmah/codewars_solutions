/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and 
the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

const countPositivesSumNegatives = (arr) => {
  // if the arr is equal to null or the length is 0
  // should return empty array
  // else filter the positive numbers and get the length
  // as well as the negative numbers and get the sum of it
  // and lastly return an array with the length of positive numbers
  // and the sum of negative numbers
  return arr === null || arr.length === 0
    ? []
    : [
        arr.filter((posNums) => posNums > 0).length,
        arr.filter((num) => num < 0).reduce((a, b) => a + b, 0),
      ]
}

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
) // [10, -65]

console.log(countPositivesSumNegatives([0, 0])) // [0, 0]
console.log(countPositivesSumNegatives([])) // []
