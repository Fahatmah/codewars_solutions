array = (str) => {
  let res = str.split(',').slice(1, -1).join(' ')
  return res !== '' ? res : null
}

// pwynn, hencethus, owade, vsara, Viktor1990, dougbacelar, 0xecho, snicusor, rootgateway, sdya (+ 1096)
// function array(arr) {
//   return arr.split(',').slice(1, -1).join(' ') || null
// }

console.log(array('')) // null
console.log(array('1')) // null
console.log(array('A1,B2')) // null
console.log(array('1,2,3')) // '2'
console.log(array('1,2,3,4')) // '2 3'
console.log(array('A1,B2,C3,D4,E5')) // 'B2 C3 D4'
console.log(array('A,1,23,456,78,9,Z')) // '1 23 456 78 9'

{
  {
    ;('⏎')
  }
}
