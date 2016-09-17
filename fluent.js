function fluent (fn) {
  return function (...args) {
    fn.apply(this, args)
    return this
  }
}

function Person () {}

Person.prototype.setName = fluent(function (first, last) {
  this.first = first
  this.last = last
})

Person.prototype.sayName = fluent(function () {
  console.log(this.first, this.last)
})

var p = new Person()
p.setName('John', 'Doe')
  .sayName()
  .setName('Jane', 'Doe')
  .sayName()
