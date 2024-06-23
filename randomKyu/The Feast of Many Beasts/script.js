feast = (beast, dish) =>
  beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
    ? true
    : false

// const feast = (beast, dish) => {
//   let beastName = beast
//   let dishLetter = dish
//   return beastName[0] === dishLetter[0] &&
//     beastName[beastName.length - 1] === dishLetter[dishLetter.length - 1]
//     ? true
//     : false
// }

console.log(feast('great blue heron', 'garlic naan')) // true
console.log(feast('chickadee', 'chocolate cake')) // true
console.log(feast('brown bear', 'bear claw')) // false
