quadrant = (x, y) =>
  x > 0 && y > 0 ? 1 : x < 0 && y > 0 ? 2 : x < 0 && y < 0 ? 3 : 4
// if (x > 0 && y > 0) return 1
// else if (x < 0 && y > 0) return 2
// else if (x < 0 && y < 0) return 3
// else return 4

console.log(quadrant(1, 5)) // 1
console.log(quadrant(3, 5)) // 1
console.log(quadrant(-1, 100)) // 2
console.log(quadrant(-1, -9)) // 3
console.log(quadrant(19, -56)) // 4
