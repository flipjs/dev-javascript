void (function () {
  'use strict'

  var Dog = (function () {
    function Dog (name) {
      this.name = name
    }

    function doSomething (thing) {
      console.log(thing)
    }

    Dog.prototype.growl = function () {
      doSomething('*growl*')
    }

    return Dog
  })()

  var dog = new Dog('Rusty')

  console.log(dog.name)
  dog.growl()
})()
