/*
The main idea is to count all the occurring characters in a string. 
If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

const count = (string) => {
  const result = {}

  for (char of string) result[char] = (result[char] || 0) + 1

  return result
}

console.log(count('')) // {}
console.log(count('a')) // {'a': 1}
console.log(count('ab')) // {'a': 1, 'b': 1}
console.log(count('aba')) // {'a': 2, 'b': 1}
console.log(count('ABC')) // {'A': 1, 'B': 1, 'C': 1}
console.log(count('AaBbbBCcCcCc')) // { A: 1, a: 1, B: 2, b: 2, C: 2, c: 2 }
