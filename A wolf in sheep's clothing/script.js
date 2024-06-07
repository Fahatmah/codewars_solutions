warnTheSheep = (queue) => {
  let warning = queue.reverse().map((q, i) => {
    if (q === 'wolf' && i + 1 === 1)
      return 'Pls go away and stop eating my sheep'
    if (q === 'wolf' && i + 1 > 1)
      return `Oi! Sheep number ${
        i + 1 - 1
      }! You are about to be eaten by a wolf!`
  })
  return warning
    .filter((warn, i) => warning.indexOf(warn) === i)
    .filter(Boolean)
    .join('')
}

/**
 * adrian.eyre, Rou97, chaymaISETCH, goldangera, cbw29512, Sarah soltani, marwen3216, L-Hejer, abshukla_, DolgKreker (+ 119)
function warnTheSheep(queue) {
  const position = queue.reverse().indexOf('wolf');
  return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
}
 */

console.log(
  warnTheSheep([
    'sheep',
    'sheep',
    'sheep',
    'sheep',
    'sheep',
    'wolf',
    'sheep',
    'sheep',
  ])
) //		"Oi! Sheep number 2! You are about to be eaten by a wolf!"

console.log(
  warnTheSheep(['sheep', 'wolf', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep'])
) //		"Oi! Sheep number 5! You are about to be eaten by a wolf!"

console.log(
  warnTheSheep(['wolf', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep'])
) //		"Oi! Sheep number 6! You are about to be eaten by a wolf!"

console.log(warnTheSheep(['sheep', 'wolf', 'sheep'])) //		"Oi! Sheep number 1! You are about to be eaten by a wolf!"

console.log(warnTheSheep(['wolf'])) //		"Pls go away and stop eating my sheep"

console.log(warnTheSheep(['sheep', 'sheep', 'wolf'])) //		"Pls go away and stop eating my sheep"
