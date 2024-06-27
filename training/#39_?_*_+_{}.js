/**
 * This time you do not need coding in function.
 * You just need to write a regular expression that matches
 * the specified numeric string. I've given the regular
 * expression name: "regex", please don't modify the name.
 *
 * According to the following rules:
 * The numeric string first digit should be "9".
 * At the end of the number string there are at least four "0".
 * It can also be a negative number(This means that the string
 * may be started by "-", maybe not)
 */
// let regex = /-{0,1}9.{0,}?0...+/
// let regex = /^-{0,1}9.{0,}?0{4,}$/
let regex = /^-*9.*0{4,}$/

console.log(regex.test('90000')) // true
console.log(regex.test('-90000')) // true
console.log(regex.test('900000000')) // true
console.log(regex.test('91230000')) // true
console.log(regex.test('-91230000')) // true

console.log(regex.test('190000')) // false
console.log(regex.test('90001')) // false
console.log(regex.test('9000')) // false
console.log(regex.test('91230')) // false
console.log(regex.test('1-90000')) // false
console.log(regex.test('-90000123')) // false

var str = 'aaaabbbb'
console.log(str.match(/a{0,}b/) + '') //output: aaaab     match:|aaaab|bbb
console.log(str.match(/a{0,}b/).toString()) //output: aaaab     match:|aaaab|bbb
console.log(str.match(/a{1,}b/) + '') //output: aaaab     match:|aaaab|bbb
console.log(str.match(/a{0,}b{0,}/) + '') //output: aaaabbbb match:|aaaabbbb|

var s = 'aaaabbbb'
console.log(s.match(/a+b/) + '') //output: aaaab
console.log(s.match(/a+b+/) + '') //output: aaaabbbb
console.log(s.match(/ab+/) + '') //output: abbbb
console.log(s.match(/x+b+/) + '') //output: null  (it matches at least 1 "x")

{
  {
    ;('⏎')
  }
}
