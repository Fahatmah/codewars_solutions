// this wont pass the other hundreds oftest cases idk y haha
// finalGrade = (e, p) =>
//   e > 90 || p >= 10 ? 100 : e > 75 && p >= 5 ? 90 : e > 50 && p >= 2 ? 75 : 0

finalGrade = (e, p) => {
  if (e > 90 || p > 10) return 100
  else if (e > 75 && p >= 5) return 90
  else if (e > 50 && p >= 2) return 75
  else return 0
}

console.log(finalGrade(100, 12)) // 100
console.log(finalGrade(85, 5)) // 90
console.log(finalGrade(0, 11)) // 0
console.log(finalGrade(19, 17)) // 0
console.log(finalGrade(24, 20)) // 0

/**
 * This function should return a number (final grade). There are four types of final grades:

100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
0, in other cases
 */
