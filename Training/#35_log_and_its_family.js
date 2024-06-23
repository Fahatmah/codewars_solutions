// initial attempt for solution
// const thinkingAndTesting = (num, base) => {
//   return Math.ceil(((Math.log(num) / Math.log(base)) % 1) * num) / 2
// }

const thinkingAndTesting = (num, base) =>
  num === 0
    ? 0
    : num === Math.pow(base, Math.floor(Math.log(num) / Math.log(base)))
    ? 0
    : num - Math.pow(base, Math.floor(Math.log(num) / Math.log(base)))

// others solution
// SithFire, NunoOliveira, ThisIsUndefined, pawelpikul, taras.bilettsky, Mayra Facio, AndresMartinez0506, dshamsani, rofidzakiabdulaziz, radidaditia (+ 1)
// thinkingAndTesting = (num, base) =>
//   num - Math.pow(base, Math.floor(Math.log(num) / Math.log(base)))

console.log(thinkingAndTesting(1, 2)) // 0
console.log(thinkingAndTesting(2, 2)) // 0
console.log(thinkingAndTesting(3, 2)) // 1
console.log(thinkingAndTesting(4, 2)) // 0
console.log(thinkingAndTesting(5, 2)) // 1
console.log(thinkingAndTesting(6, 2)) // 2
console.log(thinkingAndTesting(10, 2)) // 2
console.log(thinkingAndTesting(100, 2)) // 36
console.log(thinkingAndTesting(1000, 2)) // 488
console.log(thinkingAndTesting(111, 10)) // 11
console.log(thinkingAndTesting(222, 10)) // 122
console.log(thinkingAndTesting(333, 10)) // 233
console.log(thinkingAndTesting(1111, 10)) // 111

{
  {
    ;('⏎')
  }
}
