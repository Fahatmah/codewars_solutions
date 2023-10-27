/*
CODEWARS KATA FUNDAMENTALS
Take 2 strings s1 and s2 including only letters from a to z. 
Return a new sorted string, the longest possible, 
containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

const longest = (s1, s2) => {
  // an array for later storing
  const longestAlphabet = []
  // joining the two string into one and turning them into an array
  const joinedLetters = s1.concat(s2).split('')
  // pushing letters only once of each letter to longestAlphabet array
  joinedLetters.map((letter) => {
    if (!longestAlphabet.includes(letter)) longestAlphabet.push(letter)
  })
  // returning the array and then sorting them in order and lastly
  // joiniing them to output a string
  return longestAlphabet.sort().join('')
}

console.log(longest('aretheyhere', 'yestheyarehere')) // "aehrsty"
console.log(longest('loopingisfunbutdangerous', 'lessdangerousthancoding')) // "abcdefghilnoprstu"
console.log(longest('inmanylanguages', 'theresapairoffunctions')) // "acefghilmnoprstuy"
