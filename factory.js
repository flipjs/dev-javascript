;(function () {
  'use strict'

  function person (name) {
    // attributes (closure)
    var personName = name || 'No Name'

    // returns a new object when function is invoke
    return {
      legs: 2,
      get name () {
        return personName
      },

      set name (name) {
        personName = name
      },

      eat: function eat () {
        console.log(personName, 'is eating...')
      },

      walk: function walk () {
        console.log(personName, 'is walking...')
      }
    }
  } // end func

  var person1 = person('Philip')
  person1.eat()
  person1.name = 'Onie'
  console.log('My new name is', person1.name)
  person1.walk()

  console.log('----------')

  var person2 = person('Randy')
  person2.eat()

  console.log('----------')

  // person1 and person2 are totally different objects
  person1.eat()

  console.log('----------')

  // Prototypal Inheritance using Object.create

  var teacher = Object.create(person()) // name will default to 'No Name'

  var checkIfTeacherHasExpertiseProp = function () {
    if ({}.hasOwnProperty.call(teacher, 'expertise')) {
      console.log('teacher has expertise property')
    } else {
      console.log('teacher has NO expertise property')
    }
  }

  checkIfTeacherHasExpertiseProp()
  teacher.expertise = 'Math'
  teacher.teach = function () {
    console.log(teacher.name, 'is teaching', teacher.expertise, '...')
  }

  teacher.eat()
  checkIfTeacherHasExpertiseProp()
  teacher.name = 'Maestro'
  console.log('My new name is', teacher.name)
  teacher.teach()
  console.log("teacher's properties: ", teacher)
})()
