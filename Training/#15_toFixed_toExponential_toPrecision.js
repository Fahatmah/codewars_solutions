const howManySmaller = (arr, n) =>
  arr.map((n) => +n.toFixed(2)).filter((num) => num < n).length
