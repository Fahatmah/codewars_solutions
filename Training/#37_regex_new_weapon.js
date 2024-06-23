// notes
/** attached to the tail of the regex
 * g = global, i = ignore case,
 * m = multiline match
 * u = unicode, y = sticky
 */
// ---------------------------------------------------------------------------
let words = ['abc', '123', '&##']
for (let w of words) console.log(new RegExp(w))
// ---------------------------------------------------------------------------
//example for search()
var str = 'abcde'
console.log(str.search(/abc/)) //output: 0
console.log(str.search('abc')) //output: 0
console.log(str.search(/cde/)) //output: 2
console.log(str.search('cde')) //output: 2
// ---------------------------------------------------------------------------
//example for replace() -> allows the use of "i" and "g"
var str = 'Hello World! Hello CodeWars!'
console.log(str.replace(/world/, 'javascript'))
//output: Hello World! Hello CodeWars!
//(There is no match to the string, so nothing is replaced.)

console.log(str.replace(/world/i, 'Javascript'))
//output: Hello Javascript! Hello CodeWars!
//(Using "i" flag to match "World" and replace it by "Javascript")

console.log(str.replace(/Hello/g, 'I love'))
//output: I love World! I love CodeWars!
//(Using "g" flag to match two "Hello" and replace it by "I love")
// ---------------------------------------------------------------------------
//example for split() -> uses the "g" option by default
var str = 'ababaBa'
console.log(str.split(/b/)) //output: [ 'a', 'a', 'aBa' ]
console.log(str.split(/b/g)) //output: [ 'a', 'a', 'aBa' ]
console.log(str.split(/b/i)) //output: [ 'a', 'a', 'a', 'a' ]
// ---------------------------------------------------------------------------
//example for match()
let s = 'ABABCDEababcde'
console.log(s.match(/a/))
//output: [ 'a', index: 7, input: 'ABABCDEababcde' ]
console.log(s.match(/a/i))
//output: [ 'A', index: 0, input: 'ABABCDEababcde' ]
console.log(s.match(/a/gi))
//output: [ 'A', 'A', 'a', 'a' ]
console.log(s.match(/ab/))
//output: [ 'ab', index: 7, input: 'ABABCDEababcde' ]
console.log(s.match(/ab/i))
//output: [ 'AB', index: 0, input: 'ABABCDEababcde' ]
console.log(s.match(/ab/gi))
//output: [ 'AB', 'AB', 'ab', 'ab' ]
console.log(s.match(/xyz/))
//output: null
// ---------------------------------------------------------------------------
//We often use match() or replace() or split() to count the number of characters in a string:
//example for match()
function count1(str, char) {
  return str.match(new RegExp(char, 'g')).length
}
function count2(str, char) {
  return str.length - str.replace(new RegExp(char, 'g'), '').length
}
function count3(str, char) {
  return str.split(char).length - 1
}
console.log(count1('aaaaa', 'a')) //output: 5
console.log(count2('aaaaa', 'a')) //output: 5
console.log(count3('aaaaa', 'a')) //output: 5
// console.log(count1('aaaaa', 'b')) //output: TypeError: Cannot read property 'length' of null
console.log(count2('aaaaa', 'b')) //output: 0
console.log(count3('aaaaa', 'b')) //output: 0
// ---------------------------------------------------------------------------
// The three methods can achieve the same effect. We note that in the second time using match(), we got a "TypeError". Because the match() does not match to the string, its result is null, null does not have the length attribute. We can change it this way: *This will avoid the errors.*
//example for match()
function count1(str, char) {
  return (str.match(new RegExp(char, 'g')) || []).length
}
console.log(count1('aaaaa', 'a')) //output: 5
console.log(count1('aaaaa', 'b')) //output: 0
// ---------------------------------------------------------------------------
/**
 * Task
 * Function accept two parameters:
 * animals, a string contains some animals;
 * count, an array list of which animals we should count.
 * The result should be a number array.
 */

/**
 * function count3(str, char) {
  return str.split(char).length - 1
}
  console.log(count3('aaaaa', 'a')) //output: 5
 */
const countAnimals = (animals, count) =>
  count.map((a) => animals.split(a).length - 1)
// count.map(
//   (n, idx, arr) => animals.split(',').join('').split(count[idx]).length - 1
// )

console.log(countAnimals('dog,cat', ['dog', 'cat'])) // [1, 1]
console.log(countAnimals('dog,cat', ['dog', 'cat', 'pig'])) // [1, 1, 0]
console.log(countAnimals('dog,dog,cat', ['dog', 'cat'])) // [2, 1]
console.log(countAnimals('dog,dog,cat', ['pig', 'cow'])) // [0, 0]
{
  {
    ;('⏎')
  }
}
