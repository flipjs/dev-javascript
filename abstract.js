var AbstractClass = function () {
  if (this.constructor === AbstractClass) {
    throw new Error('Cannot instantiate abstract class')
  }
}

AbstractClass.prototype.someMethod = function () {
  throw new Error('Cannot call abstract method')
}

var ConcreteClass = function () {
  // is this needed?
  AbstractClass.apply(this, arguments)
}

ConcreteClass.prototype = Object.create(AbstractClass.prototype, {
  'constructor': ConcreteClass
})

var obj

try {
  obj = new AbstractClass() // throws
} catch (e) {
  console.log(e)
}

obj = new ConcreteClass()

try {
  obj.someMethod() // throws
} catch (e) {
  console.log(e)
}

ConcreteClass.prototype.someMethod = function () {
  console.log('Concrete Method')
}

obj.someMethod()
