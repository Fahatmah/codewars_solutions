/*
Very simple, given an integer or a floating-point number, find its opposite.

Examples:

1: -1
14: -14
-34: 34
*/

const opposite = (n) => {
  // if n is greater the 0 negate the n
  // else use Math.abs() to get the absolute value
  // which output the non-negative value
  return n > 0 ? -n : Math.abs(n)
}

console.log(opposite(1))
console.log(opposite(14))
console.log(opposite(-34))
