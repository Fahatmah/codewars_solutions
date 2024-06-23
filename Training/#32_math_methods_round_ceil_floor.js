// const roundIt = (n) => {
//   let num = n.toString().split('')
//   let decPoint = num.indexOf('.')
//   if (decPoint === 1) return Math.ceil(n)
//   else if (decPoint === num.length - 2) return Math.floor(n)
//   else return Math.round(n)
// }

// const roundIt = (n) => {
//   let dec = n.toString().split('.')
//   let arr = dec.map((n) => [Number(n)])

//   for (let i = 0; i < arr.length; i++) {
//     let num1 = arr[0].toString().length
//     let num2 = arr[1].toString().length

//     return num1 < num2
//       ? Math.ceil(n)
//       : num1 > num2
//       ? Math.floor(n)
//       : Math.round(n)
//   }
// }

const roundIt = (n) => {
  const [intPart, fracPart] = n.toString().split('.').map(Number)

  return intPart.toString().toString().length <
    fracPart.toString().toString().length
    ? Math.ceil(n)
    : intPart.toString().toString().length >
      fracPart.toString().toString().length
    ? Math.floor(n)
    : Math.round(n)
}

console.log(roundIt(3.45)) // 4
console.log(roundIt(34.5)) // 34
console.log(roundIt(34.56))
console.log(roundIt(957699.9724)) // 957699

// console.log(Math.round(1.45)) //output:1
// console.log(Math.ceil(1.45)) //output:2
// console.log(Math.floor(1.45)) //output:1
// console.log(Math.round(1.55)) //output:2
// console.log(Math.ceil(1.55)) //output:2
// console.log(Math.floor(1.55)) //output:1

{
  {
    ;('⏎')
  }
}
