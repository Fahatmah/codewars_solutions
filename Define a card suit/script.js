const defineSuit = (card) => {
  // return card[card.length - 1] === '♣'
  //   ? 'clubs'
  //   : card[card.length - 1] === '♦'
  //   ? 'diamonds'
  //   : card[card.length - 1] === '♥'
  //   ? 'hearts'
  //   : 'spades'
  const suits = {
    '♣': 'clubs',
    '♠': 'spades',
    '♦': 'diamonds',
    '♥': 'hearts',
  } 

  return suits[card[card.length - 1]]
}

// C_Minor, Wafaa122, sallamTanna, sangsphinx, salutdodo, Alexx0118, TaigaAisaka, johnydreads, Tallesco2011, emc.pedri (+ 4)
// function defineSuit(card) {
//   const s = {
//     '♣': 'clubs',
//     '♠': 'spades',
//     '♦': 'diamonds',
//     '♥': 'hearts',
//   }
//   return s[card.charAt(card.length - 1)]
// }

console.log(defineSuit('Q♠')) // 'spades'
console.log(defineSuit('9♦')) // 'diamonds'
console.log(defineSuit('J♥')) // 'hearts'
