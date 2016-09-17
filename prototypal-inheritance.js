;(function () {
  'use strict'

  // working sample
  var person = {
    name: 'Onie',
    legs: 2,
    canWalk: function canWalk () {
      console.log(this.name, 'can walk...')
    },
    canDance: function canDance () {
      console.log(this.name, 'can dance...')
    },
    growLegs: function growLegs () {
      this.legs++
    },
    me: function me () {
      console.log('I am', this.name, 'and I have', this.legs, 'legs.')
    }
  }

  // working sample is ready to use, its just a pojo
  person.me()
  person.canDance()

  console.log('---------------')

  // Create another object based on a working sample
  var chris = Object.create(person)
  chris.name = 'Philip'
  chris.legs = 2
  chris.me()
  chris.canWalk()
  chris.growLegs()
  chris.me()

  console.log('---------------')

  // working sample is still the same
  person.me()
})()

