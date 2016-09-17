'use strict'

function Person (name) {
  this.name = name
}

Person.prototype.canWalk = canWalk

function show (text) {
  console.log(text)
}

function canWalk () {
  /* jshint validthis:true */
  show('' + this.name + ' can walk...')
}

module.exports = Person

