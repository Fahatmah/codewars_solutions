/*

Write function RemoveExclamationMarks which removes all 
exclamation marks from a given string.

*/

const removeExclamationMarks = (s) => s.replaceAll('!', '')

console.log(removeExclamationMarks('Hello World!!!!!!!!!!!!'))

// someones code => used split('!') because by putting something 
// inside of the parenthesis it removes it then later to return it
// as string, they used join()
