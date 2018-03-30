export default () => {
  return class {
    constructor() {
      this.numberOne = 0
      this.numberTwo = 0
      this.sumNumber = 0
    }

    setNumberOne(number) {
      this.numberOne = number
      return this
    }

    getNumberOne() {
      return this.numberOne
    }

    setNumberTwo(number) {
      this.numberTwo = number
      return this
    }

    getNumberTwo() {
      return this.numberOne
    }

    addNumber() {
      const {numberOne, numberTwo} = this
      this.sumNumber = numberOne + numberTwo
      return this.sumNumber
    }

    toString() {
      const {numberOne, numberTwo, sumNumber} = this
      return `${numberOne} + ${numberTwo} = ${sumNumber}`
    }
  }
}
