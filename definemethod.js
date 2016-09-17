function User (user) {
  this.name = user
  this.names = ['felipe', 'onie', 'randy']
  this.names.forEach(function (name) {
    this.defineMethod('is' + name, function () {
      return this.name === name
    })
  }, this)
}

User.prototype.defineMethod = defineMethod

function defineMethod (methodName, methodBody) {
  Object.defineProperty(this, methodName, {
    enumerable: true,
    configurable: true,
    value: methodBody
  })
}

var felipe = new User('felipe')
felipe.defineMethod('say', function () {
  console.log('Hello!')
})

felipe.say()
console.log(felipe.isfelipe())
console.log(felipe.israndy())
console.log(felipe.isonie())
