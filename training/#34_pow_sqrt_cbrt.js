const cutCube = (vol, n) =>
  Number.isInteger(Math.cbrt(vol)) &&
  Number.isInteger(Math.cbrt(n)) &&
  Number.isInteger(vol / n)

/**
 * i dont really understand the instruction
 * just straight code and based on examples
 * and got a little help with ai HAHAHAHAHAHA
 */

console.log(cutCube(27, 27)) // true
console.log(cutCube(512, 8)) // true
console.log(cutCube(512, 64)) // true
console.log(cutCube(50000, 50)) // false
console.log(cutCube(432, 16)) // false
console.log(cutCube(256, 8)) // false
console.log(cutCube(27, 3)) // false
console.log(cutCube(123, 456)) // false
console.log(cutCube(27, 8)) // false

{
  {
    ;('⏎')
  }
}
