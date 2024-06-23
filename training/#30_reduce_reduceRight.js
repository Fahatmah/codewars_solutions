const tailAndHead = (arr) => {
  let sum = []

  for (let i = 0; i < arr.length - 1; i++)
    sum.push([
      +arr[i].toString().split('').pop(),
      +arr[i + 1].toString().split('').shift(),
    ])

  return sum.map((a) => a.reduce((a, b) => a + b)).reduce((a, b) => a * b)
}

// [123,456,789,1 2,3 4,5 6,78]
//    3+4 6+7 9+1 2+3 4+5 6+7
//     |   |   |   |   |   |
//    [7 ,13 ,10 , 5 , 9 ,13]

console.log(tailAndHead([123, 456, 789, 12, 34, 56, 78])) // 532350
console.log(tailAndHead([1, 2, 3, 4, 5])) // 945
console.log(tailAndHead([111, 2345, 66, 78, 900])) // 7293
console.log(tailAndHead([35456, 782, 569, 2454, 875])) // 12012

{
  {
    ;('⏎')
  }
}
