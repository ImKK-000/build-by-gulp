import { describe, it } from 'mocha'
import { expect } from 'chai'
import CalculatorExample from '../'

const Calculator = new CalculatorExample()

describe('Calculator Example', () => {
  describe('Setter and Getter of NumberOne', () => {
    it('Should 5 Expect have property NumberOne', () => {
      // Arrange
      const calculator = new Calculator()
      // Act
      const result = calculator.setNumberOne(5)
      // Assert
      expect(result).to.have.property('numberOne', 5)
    })

    it('Should 5 Expect getNumberOne return to number', () => {
      // Arrange
      const calculator = new Calculator()
      // Act
      const result = calculator.getNumberOne()
      // Assert
      expect(result).to.be.an('number')
    })
  })

  describe('Setter and Getter of NumberTwo', () => {
    it('Should 10 Expect have property NumberTwo', () => {
      // Arrange
      const calculator = new Calculator()
      // Act
      const result = calculator.setNumberTwo(10)
      // Assert
      expect(result).to.have.property('numberTwo', 10)
    })

    it('Should 10 Expect getNumberTwo return to number', () => {
      // Arrange
      const calculator = new Calculator()
      // Act
      const result = calculator.getNumberTwo()
      // Assert
      expect(result).to.be.an('number')
    })
  })

  describe('AddNumber', () => {
    it('Should 5+10 Expect 15', () => {
      // Arrange
      const calculator = new Calculator()
      calculator.setNumberOne(5)
      calculator.setNumberTwo(10)
      // Act
      const result = calculator.addNumber()
      // Assert
      expect(result).to.be.equal(15)
    })
  })

  describe('ToString', () => {
    it('Should toString Expect 5 + 10 = 15', () => {
      // Arrange
      const calculator = new Calculator()
      calculator.setNumberOne(5)
      calculator.setNumberTwo(10)
      calculator.addNumber(15)
      // Act
      const result = calculator.toString()
      // Assert
      expect(result).to.be.equal('5 + 10 = 15')
    })
  })
})
