/**
 * Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.
 */

let corrections = [
  { mistake: '5', correct: 'S' },
  { mistake: '0', correct: 'O' },
  { mistake: '1', correct: 'I' },
]

const correct = (str) => {
  return str
    .split('')
    .map((s) => {
      corrections.forEach((c) => (s === c.mistake ? (s = c.correct) : s))
      return s
    })
    .join('')
}

console.log(correct('L0ND0N')) // 'LONDON'
console.log(correct('DUBL1N')) // 'DUBLIN'
console.log(correct('51NGAP0RE')) // 'SINGAPORE'
console.log(correct('BUDAPE5T')) // 'BUDAPEST'
console.log(correct('PAR15')) // 'PARIS'

/**
 * other kata solutions
----------------------------------------------------------------------
correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')
---------------------------------------------------------------------- 
const corrections = {
	'5': 'S',
	'0': 'O',
  '1': 'I',
};
const correct = string => (
	string.replace(/[501]/g, character => corrections[character])
);
----------------------------------------------------------------------
function correct(string) {
	return [...string].map(a => ({'0':'O','5':'S','1':'I'})[a]||a).join('')
}
 */
