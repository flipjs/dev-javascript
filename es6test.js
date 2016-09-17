'use strict'

export default class Person {
  constructor (name) {
    this.name = name
  }

  say (text) {
    console.log(`${this.name} is ${text}...`)
  }

  walk () {
    this.say('walking')
  }

  talk () {
    this.say('talking')
  }

  eat () {
    this.say('eating')
  }
}
