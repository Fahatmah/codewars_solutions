/*

Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)

*/

const persistence = (n) => {
	let count = 0
	while (n.toString().length > 1) {
		// n will be the current digit turns into string to
		// get the length then as long as the length is
		// greater than 1 it will loop and increment the
		// count until it stops when the length is equal to
		// 1 then it finally returns the incremented count
		// if the length is 1 it immediately returns the count
		n = multiplyDigits(n)
		count++
	}
	return count
}

const multiplyDigits = (n) => n.toString().split('').reduce((a, b) => a * b, 1)

console.log(persistence(39)) // 3
console.log(persistence(4)) // 0
console.log(persistence(25)) // 2
console.log(persistence(999)) // 4
