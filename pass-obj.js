'use strict'

function Person (person) {
  this.name = person.name
  this.age = person.age
  this.email = person.email
  this.sayMyName = sayMyName

  /* jshint validthis:true */
  var text = 'My name is '

  function sayMyName () {
    console.log(text + this.name)
  }
}

var person = new Person({
  name: 'philip',
  age: 30,
  email: 'philip@example.com'
})

var person2 = new Person(person)
var person3 = new Person({
  name: 'Alex',
  age: 23
})

var obj = {
  name: 'Chris',
  age: 30,
  email: 'xxx@x.com',
  interests: ['photography', 'pool', 'darts'],
  toString: function () {
    return 'My name is ' +
    this.name + " and I'm " + this.age + '. I love ' + this.interests[1]
  }
}

var person4 = new Person(obj)

person.sayMyName()
console.log('person2')
person2.sayMyName()
console.log('person3')
person3.sayMyName()
console.log(obj.toString())
person4.sayMyName()
console.log(person4)

var person5 = new Person(new Person(new Person(person)))
person5.sayMyName()

function Animal (animal) {
  this.guru = 'Philip'
  animal.say = this.say
  animal.guru = this.guru
  return animal
}

Animal.prototype.say = function () {
  console.log('The guru ' + this.guru +
    ' says, I am a shape-shifting animal!')
}

var animal = new Animal({
  name: 'Herby',
  legs: '4'
})
console.log(animal.name)
console.log(animal.legs)

var foo = new Animal({
  foo: 'bar'
})
console.log(foo.foo)
foo.say()
console.log(foo)

