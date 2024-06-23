// const sortIt = (arr) => {
//   let counts = []
//   arr.forEach((num) => (counts[num] = (counts[num] || 0) + 1))

//   let indexedArr = arr.map((num, index) => ({
//     num,
//     frequency: counts[num],
//     index,
//   }))

//   return indexedArr
//     .sort((a, b) =>
//       a.frequency !== b.frequency ? a.frequency - b.frequency : b.num - a.num
//     )
//     .map((n) => n.num)
// }

function sortIt(arr) {
  let numberOf = {}
  arr.forEach((x) => (numberOf[x] = (numberOf[x] || 0) + 1))
  return arr.slice().sort((x, y) => numberOf[x] - numberOf[y] || y - x)
}

// console.log(sortIt([1, 1, 1, 2, 2, 3]))
// // [3,2,2,1,1,1])
// console.log(sortIt([1, 1, 1, 2, 2, 2, 3, 3, 3]))
// // // [3,3,3,2,2,2,1,1,1])
// console.log(sortIt([1, 2, 3, 4, 4, 5, 5, 6, 6]))
// [3,2,1,6,6,5,5,4,4])
console.log(sortIt([1, 3, 3, 5, 2, 2, 4, 6, 6, 7, 7, 7]))
// [5,4,1,6,6,3,3,2,2,7,7,7]

{
  {
    ;('⏎')
  }
}

/** ---When i was really a noob and I cant really solve this kata, I just
 * google and used ai to get ideas and solve it and i do these as well on the
 * other katas...
 * 
 const sortIt = (arr) => {
  // Count frequencies
  let counts = [];
  arr.forEach((num) => {
    counts[num] = (counts[num] || 0) + 1;
  });

  // Create indexed array with num, frequency, and original index
  let indexedArr = arr.map((num, index) => ({
    num,
    frequency: counts[num],
    index,
  }));

  // Sort based on frequency (ascending) and num (descending if frequencies are the same)
  indexedArr.sort((a, b) => {
    if (a.frequency !== b.frequency) {
      return a.frequency - b.frequency; // Sort by frequency (ascending)
    } else {
      return b.num - a.num; // Sort num in descending order when frequencies are the same
    }
  });

  // Extract the sorted elements from indexedArr
  let sortedArr = indexedArr.map((obj) => obj.num);

  return sortedArr;
};

 */
