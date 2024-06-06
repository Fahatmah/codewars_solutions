quarterOf = (m) =>
  m > 0 && m <= 3 ? 1 : m >= 4 && m <= 6 ? 2 : m >= 7 && m <= 9 ? 3 : 4
//   {
//   if (m > 0 && m <= 3) return 1
//   if (m >= 4 && m <= 6) return 2
//   if (m >= 7 && m <= 9) return 3
//   else return 4
// }

// quarterOf = (m) => Math.ceil(m/3)

console.log(quarterOf(3)) // 1
console.log(quarterOf(8)) // 3
console.log(quarterOf(11)) // 4
/**
 * 1 = 1
 * 2 = 1
 * 3 = 1
 *
 * 4 = 2
 * 5 = 2
 * 6 = 2
 *
 * 7 = 3
 * 8 = 3
 * 9 = 3
 *
 * 10 = 4
 * 11 = 4
 * 12 = 4
 */
