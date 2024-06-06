uniqueInOrder = (str) => Array.from(str).filter((v, i, arr) => v !== arr[i - 1])

console.log(uniqueInOrder('AAAABBBCCDAABBB')) // ['A','B','C','D','A','B']
console.log(uniqueInOrder('ABBCcAD'))
// ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1, 2, 2, 3, 3])) // [1,2,3]
