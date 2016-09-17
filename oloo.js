;(function () {
  'use strict'

  /* jshint validthis: true */
  function say (text) {
    console.log(this.name + ' ' + text)
  }

  var Person = {
    init: init,
    canWalk: canWalk,
    canDance: canDance
  }

  function init (name) {
    this.name = name
    this.eyes = 2
  }

  function canWalk () {
    say.call(this, 'can walk...')
  }

  function canDance () {
    say.call(this, 'can dance...')
  }

  var chris = Object.create(Person)
  chris.init('Chris')
  chris.canWalk()
  chris.canDance()
  console.log(chris.name, 'has', chris.eyes, 'eyes')
  if (chris.hasOwnProperty('name')) {
    console.log('chris has property name')
  } else {
    console.log('chris has NO property name')
  }

  var john = Object.create(Person)
  john.init('John')
  john.eyes = 4
  console.log(john.name, 'has', john.eyes, 'eyes')
  john.canWalk()
})()

