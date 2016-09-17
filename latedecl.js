function Person (name) {
  'use strict'
  this.name = name
  this.hello = function hello () {
    var message = test + ' ' + this.name // var test defined below
    log(message) // function log defined below
  }

  // values of these vars can be accessed by constructor properties (this) even
  // though they are defined below the this definition
  var test = 'hello'
  var log = function (text) {
    console.log(text)
  }
}

var chris = new Person('Chris')
chris.hello()

function varBottom () {
  'use strict'

  return {
    // testData will be undefined due to late declaration
    testData: testData
  }

  // this will not be processed
  var testData = {
    name: 'Felipe',
    age: 23
  }
}

var test2 = varBottom()
console.log(test2)
