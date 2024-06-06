sameCase = (a, b) =>
  !/^[a-zA-Z]+$/.test(a) || !/^[a-zA-Z]+$/.test(b)
    ? -1
    : (a.toUpperCase() === a && b.toUpperCase() === b) ||
      (a.toLowerCase() === a && b.toLowerCase() === b)
    ? 1
    : 0

console.log(sameCase('C', 'B')) // 1
console.log(sameCase('b', 'a')) // 1
console.log(sameCase('d', 'd')) // 1
console.log(sameCase('A', 's')) // 0
console.log(sameCase('c', 'B')) // 0
console.log(sameCase('b', 'Z')) // 0
console.log(sameCase('\t', 'Z')) //, -1
console.log(sameCase('H', ':')) // -1
