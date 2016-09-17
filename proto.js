'use strict'

class Person {
  constructor (name) {
    this.name = name
  }

  walk () {
    console.log(`${this.name} is walking...`)
  }

  talk () {
    console.log(`${this.name} is talking...`)
  }

  eat () {
    console.log(`${this.name} is eating...`)
  }
}

class Employee extends Person {
  constructor (name, role) {
    super(name)
    this.role = role
  }

  greet () {
    console.log(`Hi! My name is ${this.name}, and my role is a ${this.role}`)
  }
}

const chris = new Person('Chris')
chris.talk()
chris.walk()
chris.eat()

const peter = new Employee('Peter', 'Developer')
peter.walk()
peter.greet()

/* jshint proto: true */
/* eslint-disable no-proto */

console.log(peter.__proto__ === Employee.prototype) // true
console.log(peter.__proto__.__proto__ === Person.prototype) // true
console.log(peter.__proto__.__proto__ === chris.__proto__) // true

