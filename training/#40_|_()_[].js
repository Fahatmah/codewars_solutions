/**
 * URL start with http:// or https://
 * URL end with .com or .net
 * The middle part of URL can use letters, numbers and dots
 * Need to ignore case, and a string may contain multiple URLs
 * Your regular expression name should be regex and your
 * result should be a string array.
 */

let regex = /((http|https):\/\/)[a-z\.|a-z0-9]+\.(com|net)/gi

console.log('http://codewars.com'.match(regex)) // [ 'http://codewars.com' ]
console.log('http://www.codewars.com'.match(regex)) // [ 'http://www.codewars.com' ]
console.log('HTTP://CODEWARS.COM'.match(regex)) // [ 'HTTP://CODEWARS.COM' ]
console.log('https://www.codewars.com'.match(regex)) // [ 'https://www.codewars.com' ]
console.log('http://www.codewars.net'.match(regex)) // [ 'http://www.codewars.net' ]
console.log('1234http://www.codewars.comabcd'.match(regex)) // [ 'http://www.codewars.com' ]
console.log(
  'http://www.codewars1.com!@#$%http://www.codewars2.net'.match(regex)
) // [ 'http://www.codewars1.com', 'http://www.codewars2.net' ]
console.log('http://www.codewars1.comabchttp://www.codewars2.net'.match(regex)) 
// [ 'http://www.codewars1.com', 'http://www.codewars2.net' ]
console.log('http://www.codewars.com.net'.match(regex)) // [ 'http://www.codewars.com.net' ]
console.log('http://www.codewars.com.fak'.match(regex)) // [ 'http://www.codewars.com' ]

console.log('ftp://www.codewars.com'.match(regex)) //null
console.log('http://www.code#wars.com'.match(regex)) //null
console.log('http://www.codewars.org'.match(regex)) //null
console.log('http://www . codewars . com'.match(regex)) //null
console.log('http://mail@codewars.com'.match(regex)) //null
console.log('http://.com'.match(regex)) // null

{
  {
    ;('⏎')
  }
}
