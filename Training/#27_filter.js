// const countGrade = (arr) => {
//   let nOfGrade = { S: 0, A: 0, B: 0, C: 0, D: 0, X: 0 }

//   arr.filter((x) =>
//     x === 100
//       ? (nOfGrade.S += 1)
//       : x < 100 && x >= 90
//       ? (nOfGrade.A += 1)
//       : x < 90 && x >= 80
//       ? (nOfGrade.B += 1)
//       : x < 80 && x >= 60
//       ? (nOfGrade.C += 1)
//       : x < 60 && x >= 0
//       ? (nOfGrade.D += 1)
//       : x === -1
//       ? (nOfGrade.X += 1)
//       : {}
//   )

//   return nOfGrade
// }

const countGrade = (arr) =>
  arr.reduce(
    (nGradesObj, score) => {
      score === 100
        ? nGradesObj.S++
        : score < 100 && score >= 90
        ? nGradesObj.A++
        : score < 90 && score >= 80
        ? nGradesObj.B++
        : score < 80 && score >= 60
        ? nGradesObj.C++
        : score < 60 && score >= 0
        ? nGradesObj.D++
        : score === -1
        ? nGradesObj.X++
        : {}
      return nGradesObj
    },
    { S: 0, A: 0, B: 0, C: 0, D: 0, X: 0 }
  )

console.log(countGrade([50, 60, 70, 80, 90, 100]))
// {S:1, A:1, B:1, C:2, D:1, X:0});
console.log(countGrade([65, 75, , 85, 85, 95, 100, 100]))
// {S:2, A:1, B:2, C:2, D:0, X:0});
console.log(countGrade([-1, -1, -1, -1, -1, -1]))
// {S:0, A:0, B:0, C:0, D:0, X:6});

{
  {
    ;('⏎')
  }
}

// a.bouillon21, BHesseldieck, johnob3, madhubs, zaj6827, arn1313, jordanb94, taras.bilettsky, user4670199, danielachocue (+ 27)
// function countGrade(scores){
//   return {
//     'S': scores.filter(function(x){return x == 100}).length,
//     'A': scores.filter(function(x){return (x < 100 && x >= 90)}).length,
//     'B': scores.filter(function(x){return (x < 90 && x >= 80)}).length,
//     'C': scores.filter(function(x){return (x < 80 && x >= 60)}).length,
//     'D': scores.filter(function(x){return (x < 60 && x >= 0)}).length,
//     'X': scores.filter(function(x){return x == -1}).length,
//   };
// }

// const countGrade = (arr) => {
//   let nOfGrade = { S: 0, A: 0, B: 0, C: 0, D: 0, X: 0 }

//   arr.filter((x) => {
//     if (x === 100) nOfGrade.S += 1
//     if (x < 100 && x >= 90) nOfGrade.A += 1
//     if (x < 90 && x >= 80) nOfGrade.B += 1
//     if (x < 80 && x >= 60) nOfGrade.C += 1
//     if (x < 60 && x >= 0) nOfGrade.D += 1
//     if (x === -1) nOfGrade.X += 1

//   return nOfGrade
// }

// var a = [1, 1, 1, 2, 2, 3, 4, 4]
// const count = (arr, n) => arr.filter(x => x == n).length
// console.log(count(a, 1)) //output: 3
// console.log(count(a, 2)) //output: 2

// var a = ['', 'a', 'ab', 'aba', 'abab', 'ababa']
// var b = a.filter((x) => {
//   if (x.length < 2) return true
//   var y = x.split('').reverse().join('')
//   console.log(x) // x = 'ab', 'aba', 'abab', 'ababa'
//   console.log(y) // y = 'ba', 'aba', 'baba', 'ababa'

//   return x == y // check if it's palindrome
// })
// console.log(b) //output: [ '', 'a', 'aba', 'ababa' ]
