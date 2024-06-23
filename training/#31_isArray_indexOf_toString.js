// refactored
const blackAndWhite = (arr) =>
  `It's a ${
    !Array.isArray(arr)
      ? 'fake'
      : arr.includes(5) && arr.includes(13)
      ? 'black'
      : 'white'
  } array`

// const blackAndWhite = (arr) =>
//   `It's a ${
//     Array.isArray(arr) && arr.some((n) => n === 5) && arr.some((n) => n === 13)
//       ? 'black'
//       : Array.isArray(arr) &&
//         arr.some((n) => n !== 5) &&
//         arr.some((n) => n !== 12)
//       ? 'white'
//       : 'fake'
//   } array`

console.log(blackAndWhite(5, 13)) //  "It's a fake array"
console.log(blackAndWhite([5, 13])) //  "It's a black array"
console.log(blackAndWhite([5, 12])) //  "It's a white array"

{
  {
    ;('⏎')
  }
}
