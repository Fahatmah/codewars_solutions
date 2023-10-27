/*
Check to see if a string has the same amount of 'x's and 'o's. 
The method must return a boolean and be case insensitive. 
The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

const XO = (str) => {
//   filter all of the x
  const exes = str.toLowerCase().split('').filter((i) => i === 'x')
//   filter all of the o
  const ohs = str.toLowerCase().split('').filter((i) => i === 'o')
//   compare the length of exes and ohs, if they are equal
//   return true as well as the no exes and ohs else
//   return true if there's none
  return exes.length === ohs.length
}
