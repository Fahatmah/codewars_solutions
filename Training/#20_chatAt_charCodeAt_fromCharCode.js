const topSecret = (str) => {
  let decodedMessage = ''

  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    let code = char.charCodeAt()

    if (code >= 65 && code <= 90) {
      code = code - 3
      if (code < 65) code = code + 26
    } else if (code >= 97 && code <= 122) {
      code = code - 3
      if (code < 97) code = code + 26
    }

    decodedMessage += String.fromCharCode(code)
  }

  return decodedMessage
}

//question1: The top secret file number is...
answer1 = '2777'
//question2: Super agent's name is...
answer2 = 'sfdjmx'
//question3: He stole the treasure is...
answer3 = 'Toilet paper'
