const rndCode = () => {
  let randomChars = (array, length) =>
    array
      .split('')
      .map((n, _, arr) => arr[~~(arr.length * Math.random())])
      .join('')
      .slice(0, length)

  return `${randomChars('ABCDEFGHIJKLM', 2)}${randomChars(
    '1234567890',
    4
  )}${randomChars('~!@#$%^&*', 2)}`
}

console.log(rndCode())

{
  {
    ;('⏎')
  }
}

// initial code
// const rndCode = () => {
//   let upperCaseLetter = 'ABCDEFGHIJKLM'
//     .split('')
//     .map((n, _, arr) => arr[~~(arr.length * Math.random())])
//     .join('')
//     .slice(0, 2)

//   let randomNumbers = '1234567890'
//     .split('')
//     .map((n, _, arr) => arr[~~(arr.length * Math.random())])
//     .join('')
//     .slice(0, 4)

//   let chars = '~!@#$%^&*'
//     .split('')
//     .map((n, _, arr) => arr[~~(arr.length * Math.random())])
//     .join('')
//     .slice(0, 2)

//   return `${upperCaseLetter}${randomNumbers}${chars}`
// }

// NOTES
// get random number between to values
console.log(Math.random() * (3 - 1) + 1)
// get random integer number
// ---------------------------------------------------------------------------
for (let i = 0; i < 5; i++) {
  console.log(~~(100 * Math.random()))
}
// ---------------------------------------------------------------------------
// get random integer number between two values
console.log(
  Math.floor(Math.random() * (Math.floor(5) - Math.ceil(1)) + Math.ceil(1))
)
// ---------------------------------------------------------------------------
const minCeiled = Math.ceil(1)
const maxFloored = Math.floor(5)
console.log(
  Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
) // The maximum is inclusive and the minimum is inclusive
// ---------------------------------------------------------------------------
// random ASCII character
console.log(String.fromCharCode(~~(Math.random() * 127)))
// ---------------------------------------------------------------------------
// random lowercase letters
console.log(String.fromCharCode(~~(Math.random() * 26) + 97))
// ---------------------------------------------------------------------------
// random uppercase letters
console.log(String.fromCharCode(~~(Math.random() * 26) + 65))
// ---------------------------------------------------------------------------
// get random non regular characters
let chars = 'aeiou'
for (let i = 0; i < 5; i++) console.log(chars[~~(chars.length * Math.random())])
// ---------------------------------------------------------------------------
// get random names
let snsdNames = [
  'Taeyeon',
  'Sunny',
  'Tiffany',
  'Hyoyeon',
  'Yuri',
  'Sooyoung',
  'Yoona',
  'Seohyon',
]
for (let i = 0; i < 4; i++)
  console.log(snsdNames[~~(snsdNames.length * Math.random())])
// ---------------------------------------------------------------------------
