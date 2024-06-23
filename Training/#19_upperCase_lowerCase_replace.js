const alienLanguage = (str) => {
  return str
    .split(' ')
    .map((s) => s.toUpperCase().split(''))
    .map(
      (s) => s.slice(0, -1).join('') + s[s.join('').length - 1].toLowerCase()
    )
    .join(' ')
}
