const isolateIt = (arr) => {
  return arr.map((i) => {
    let middleIdx = Math.floor(i.length / 2)

    return i.length % 2 === 0
      ? i.slice(0, middleIdx) + '|' + i.slice(middleIdx)
      : i.slice(0, middleIdx) + (i[middleIdx] = '|') + i.slice(middleIdx + 1)
  })
}

console.log(isolateIt(['abcd', 'efgh'])) // ['ab|cd', 'ef|gh']
console.log(isolateIt(['abcd', '5678'])) // ['ab|cd', '56|78']
console.log(isolateIt(['abcde', 'fghij'])) // ['ab|de', 'fg|ij']
console.log(isolateIt(['1234', '56789'])) // ['12|34', '56|89']

{
  {
    ;('⏎')
  }
}
