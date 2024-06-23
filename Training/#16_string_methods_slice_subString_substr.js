const cutIt = (arr) =>
  arr.map((s) => s.slice(0, Math.min(...arr.map((s) => s.length))))
