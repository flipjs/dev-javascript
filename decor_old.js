'use strict'

function Beverage (name, temperature) {
  this.name = name
  this.temperature = temperature
}

Beverage.prototype.drink = function () {
  console.log('I\m drinking ' + this.name)
}

function Coffee (type) {
  Beverage.call(this, 'coffee', 'hot')
  this.type = type
}

Coffee.prototype = Object.create(Beverage.prototype)
Coffee.prototype.sip = function () {
  console.log('Sipping some awesome ' + this.type + ' ' + this.name)
}

Coffee.prototype.cost = function () {
  return 5
}

Coffee.small = function (coffeeObj) {
  var cost = coffeeObj.cost()
  coffeeObj.cost = function () {
    return cost - 1
  }
}

Coffee.large = function (coffeeObj) {
  var cost = coffeeObj.cost()
  coffeeObj.cost = function () {
    return cost + 1
  }
}

Coffee.sugar = function (coffeeObj) {
  var cost = coffeeObj.cost()
  coffeeObj.cost = function () {
    return cost + 0.15
  }
}

Coffee.creamer = function (coffeeObj) {
  var cost = coffeeObj.cost()
  coffeeObj.cost = function () {
    return cost + 0.15
  }
}

Coffee.whippedCream = function (coffeeObj) {
  var cost = coffeeObj.cost()
  coffeeObj.cost = function () {
    return cost + 0.15
  }
}

Coffee.milk = function (coffeeObj) {
  var cost = coffeeObj.cost()
  coffeeObj.cost = function () {
    return cost + 0.15
  }
}

Coffee.foam = function (coffeeObj) {
  var cost = coffeeObj.cost()
  coffeeObj.cost = function () {
    return cost + 0.15
  }
}

Coffee.chocolate = function (coffeeObj) {
  var cost = coffeeObj.cost()
  coffeeObj.cost = function () {
    return cost + 0.15
  }
}

Coffee.mocha = function (coffeeObj) {
  Coffee.milk(coffeeObj)
  Coffee.foam(coffeeObj)
  Coffee.chocolate(coffeeObj)
  var cost = coffeeObj.cost()
  coffeeObj.cost = function () {
    return cost
  }
}

var mocha = new Coffee('mocha')
Coffee.mocha(mocha)
mocha.sip()
console.log(mocha.cost())

var coffee = new Coffee('regular')
Coffee.large(coffee)
Coffee.sugar(coffee)
Coffee.creamer(coffee)
coffee.sip()
console.log(coffee.cost())
