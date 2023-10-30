// in terms of code quality
// this is more concise and readable
const high = (s) =>{
  let words = s.split(' ') // splitting the words which returns an array of strings
  let highestScore = 0 // declaring this for later reference of storing
  let highestScoringWord = '' // declaring this for later reference of storing
  
// accessing each word 
  for(const word of words) {
    let score = 0 // declaring this for later comparison
// accessing letters of a word
    for(const letter of word) {
//  get the point of each letter and store it in score
      score += letter.charCodeAt(0) - 'a'.charCodeAt(0) + 1
//  if score > highestScore, then highestScore will be equal to score
      if(score > highestScore) {
        highestScore = score
//         and that word that is currently accessed will be stored in highestScoringWord
        highestScoringWord = word
      }
    }
  }
//   obviously returning the highestScoringWord
  return highestScoringWord
}

// in terms of performance
// this is more slightly efficient
/*

const highScoreWord = (str) => {
  let word = str.split(' ')
  let highestScore = 0
  let highestScoringWord = ''

  for (let i = 0; i < word.length; i++) {
    let score = 0
    let letter = word[i].split('')
    for (let j = 0; j < letter.length; j++) {
      score += letter[j].charCodeAt(0) - 'a'.charCodeAt(0) + 1

      if (score > highestScore) {
        highestScore = score
        highestScoringWord = letter.join('')
      }
    }
  }
  return highestScoringWord
}

*/
