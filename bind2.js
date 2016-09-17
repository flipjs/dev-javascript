function Person (name) {
  'use strict'

  /* jshint validthis:true */
  this.name = name

  var xmen = {
    name: 'Wolverine'
  }

  var interests = ['pool', 'darts', 'photography']

  function sayName () {
    console.log('Hello, ' + this.name)
    interests.map(function (item) {
      console.log('' + this.name + ':' + item)
    }.bind(xmen))
  }

  this.say = function () {
    sayName.call(this)
  }

  var sayHello = function () {
    console.log('Hello, ' + this.name)
  }.bind(xmen)

  this.sayHello = sayHello
}

var person = new Person('Chrish')
person.say()
person.sayHello()

var hello = person.sayHello

console.log((hello === person.sayHello) ? 'equal' : 'not equal')
hello()
