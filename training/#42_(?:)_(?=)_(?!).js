var regex = /\d{3}(?!\$)/g
// var regex = /\d(?=(\d{3})+$)/g

const addCommas = (money, reg) =>
  money
    .split('')
    .reverse()
    .join('')
    .replace(reg, (x) => x + ',')
    .split('')
    .reverse()
    .join('')
// money.replace(reg, (x) => x + ',')

console.log(addCommas('$123', regex)) // '$123'
console.log(addCommas('$1234', regex)) // '$1,234'
console.log(addCommas('$12345', regex)) // '$12,345'
console.log(addCommas('$1234567', regex)) // '$1,234,567'
console.log(addCommas('$123456789', regex)) // '$123,456,789'

{
  {
    ;('⏎')
  }
}
