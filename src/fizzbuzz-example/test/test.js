import { describe, it } from 'mocha'
import { expect } from 'chai'
import { sayFizzBuzz } from '../index'

describe('FizzBuzz Example', () => {
  describe('sayFizzBuzz', () => {
    it('Should 1 Expect 1', () => {
      // Arrange
      const data = 1
      // Act
      const result = sayFizzBuzz(data)
      // Assert
      expect(result).to.be.equal(1)
    })

    it('Should 3 Expect Fizz', () => {
      // Arrange
      const data = 3
      // Act
      const result = sayFizzBuzz(data)
      // Assert
      expect(result).to.be.equal('Fizz')
    })

    it('Should 5 Expect Buzz', () => {
      // Arrange
      const data = 5
      // Act
      const result = sayFizzBuzz(data)
      // Assert
      expect(result).to.be.equal('Buzz')
    })

    it('Should 6 Expect Fizz', () => {
      // Arrange
      const data = 6
      // Act
      const result = sayFizzBuzz(data)
      // Assert
      expect(result).to.be.equal('Fizz')
    })

    it('Should 10 Expect Buzz', () => {
      // Arrange
      const data = 10
      // Act
      const result = sayFizzBuzz(data)
      // Assert
      expect(result).to.be.equal('Buzz')
    })

    it('Should 15 Expect FizzBuzz', () => {
      // Arrange
      const data = 15
      // Act
      const result = sayFizzBuzz(data)
      // Assert
      expect(result).to.be.equal('FizzBuzz')
    })
  })
})
