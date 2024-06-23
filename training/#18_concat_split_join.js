const splitAndMerge = (str, separator) =>
  str
    .split(' ')
    .map((s) => s.split('').join(separator))
    .join(' ')
