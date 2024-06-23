_if = (bool, func1, func2) => (bool === true ? func1() : func2())

console.log(
  true,
  function () {
    console.log('True')
  },
  function () {
    console.log('false')
  }
) // true
