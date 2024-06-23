const flickSwitch = (arr) =>
  ((bool = true) => arr.map((i) => (i === 'flick' ? (bool = !bool) : bool)))()

console.log(flickSwitch(['codewars', 'flick', 'code', 'wars', 'flick']))
// [true, false, false, false]);
console.log(flickSwitch(['flick', 'chocolate', 'adventure', 'sunshine']))
//  [false, false, false, false]);
console.log(flickSwitch(['bicycle', 'jarmony', 'flick', 'sheep', 'flick'])) //  [true, true, false, false, true]);
console.log(flickSwitch(['flick', 'flick', 'flick', 'flick', 'flick'])) //  [false, true, false, true, false]);
console.log(flickSwitch(['john, smith, susan', 'flick'])) //  [true, false]);
// console.log(flickSwitch(['bicycle'])) //  [true]);
// console.log(flickSwitch(['flick'])) //  [false]);
// console.log(flickSwitch([])) //  []);
