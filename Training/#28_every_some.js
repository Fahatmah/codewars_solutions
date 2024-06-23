// const mirrorImage = (arr) => {
//   let a = 0,
//     b = 0,
//     sameNum = [-1, -1]

//   arr.some((_, idx) => {
//     a = arr[idx]
//     b = arr[idx + 1] ? arr[idx + 1] : -1

//     if (
//       a === b ||
//       +a.toString().split('').reverse().join('') === b &&
//       a === +b.toString().split('').reverse().join('')
//     ) {
//       sameNum = [a, b]
//       return true
//     }

//     return false
//   })

//   return sameNum
// }

const mirrorImage = (arr) => {
  let a = 0,
    b = 0,
    sameNum = [-1, -1]

  arr.some((_, idx) => {
    a = arr[idx]
    b = arr[idx + 1] ? arr[idx + 1] : -1

    if (
      a === b ||
      (+a.toString().split('').reverse().join('') === b &&
        a === +b.toString().split('').reverse().join(''))
    ) {
      sameNum = [a, b]
      return true
    }

    return false
  })

  return sameNum
}

console.log(
  mirrorImage([
    80964, 86936, 48659, 88780, 8788, 49656, 65694, 38559, 98935, 68429, 5572,
    1033, 3301, 1033, 37872, 33947,
  ])
) // [49656, 65694]
console.log(mirrorImage([11, 22, 33, 33, 22, 11])) // [33, 33]
console.log(mirrorImage([454, 86, 57, 75, 16, 88])) // [57, 75]
console.log(mirrorImage([454, 0, 57, 0, 16, 88])) // [-1, -1]

{
  {
    ;('⏎')
  }
}
