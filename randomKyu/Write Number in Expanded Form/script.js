/**
 * You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!!
 */

expandedForm = (num) => {
  return num
    .toString()
    .split('')
    .reverse()
    .map((n, i) => (n === '0' ? '' : n + '0'.repeat(i)))
    .filter(Boolean)
    .reverse()
    .join(' + ')
}

// console.log(expandedForm(12)) // '10 + 2'
// console.log(expandedForm(42)) // '40 + 2'
console.log(expandedForm(70304)) // '70000 + 300 + 4'
