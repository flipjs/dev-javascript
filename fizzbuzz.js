'use strict'

function FizzBuzz () {}

FizzBuzz.prototype.execute = function (number) {
  number = parseInt(number, 10)
  return number % 15 === 0
    ? 'fizzbuzz'
    : number % 3 === 0
      ? 'fizz'
      : number % 5 === 0
        ? 'buzz'
        : number
}

FizzBuzz.prototype.executeUpTo = function (number) {
  number = parseInt(number, 10)
  var numbers = []
  for (var i = 1; i <= number; i += 1) {
    numbers.push(this.execute(i))
  }
  return numbers
}

var fb = new FizzBuzz()

console.log(fb.executeUpTo(234).join(', '))
