class Ship {
  constructor(draft, crew) {
    this.draft = draft
    this.crew = crew
  }

  isWorthIt = () => this.draft - this.crew * 1.5 > 20
}

let pirateShip = new Ship(15, 10)
let pirateShip2 = new Ship(100, 20)

console.log(pirateShip.isWorthIt())
console.log(pirateShip2.isWorthIt())

{
  {
    ;('⏎')
  }
}
