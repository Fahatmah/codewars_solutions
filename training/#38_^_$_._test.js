// first attempt
/**
 * 
 * @param {*} str 
 * @param {*} word 
 * @returns 
 * const findSimilarity = (str, word) => {
  return str
    .split(' ')
    .map((s) => {
      // let strWord = s[0] + Array(s.length - 1).join('.') + s.slice(-1)
      // console.log(strWord)
      // console.log(strWord[0])
      // console.log(strWord[strWord.length - 1])
      // console.log(strWord.length)
      if (
        s[0] === word[0] &&
        s[s.length - 1] === word[word.length - 1] &&
        s.length === word.length
      )
        return s
      else return
    })
    .filter(Boolean)
    .join(' ')
}
 */
const findSimilarity = (str, word) =>
  str
    .split(' ')
    .map((s) =>
      word[0].match(new RegExp('^' + s[0])) &&
      word[word.length - 1].match(new RegExp(s[s.length - 1] + '$')) &&
      word.length === s.length
        ? s
        : ''
    )
    .filter(Boolean)
    .join(' ')

/**
 * shorten code by ai
 * const findSimilarity = (str, word) =>
  str
    .split(' ')
    .filter(s => new RegExp(`^${s[0]}.*${s[s.length - 1]}$`).test(word) && word.length === s.length)
    .join(' ');
 */

console.log(findSimilarity('bag dog dig dot doog dogs', 'dog')) // "dog dig"
console.log(findSimilarity('bag dog dig dot doog dogs', 'dig')) // "dog dig"
console.log(findSimilarity('bag dog dig dot doog dogs', 'dot')) // "dot"
console.log(findSimilarity('bag dog dig dot doog dogs', 'god')) // ""
console.log(
  findSimilarity(
    'vRllN QRo cUz gdI SImLC fyQhN Gzi PWzja SxTdC VlQ SdmKC ImF',
    'SWyfC'
  )
) // "SImLC SxTdC SdmKC"

let word = 'abcd'
//method 1:
//
// let regstr =
//   word[0] + //first letter
//   word.slice(1, -1).replace(/./g, '.') + //middle letters
//   word.slice(-1) //last letter
// let reg1 = new RegExp('^' + regstr + '$')
// console.log(reg1) //output: /^a..d$/
//method 2:
// var regstr=word.replace(/./g,".")
//                .replace(/^./,word[0])
//                .replace(/.$/,word.slice(-1));
// var reg2=new RegExp("^"+regstr+"$");
// console.log(reg2)  //output: /^a..d$/

//method 3:
var regstr = word[0] + Array(word.length - 1).join('.') + word.slice(-1)
//use Array(x).join(".") to generate a repeat text of "."
var reg3 = new RegExp('^' + regstr + '$')
console.log(reg3) //output: /^a..d$/

{
  {
    ;('⏎')
  }
}
