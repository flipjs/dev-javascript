function decorate (target, name, descriptor) {
  const fn = descriptor.value
  descriptor.value = function (...args) {
    fn.apply(target, args)
    return target
  }
}
class Person {
  @decorate
  setName (first, last) {
    this.first = first
    this.last = last
  }
  sayName () {
    console.log(this.first, this.last)
  }
}

const p = new Person()
p.setName('John', 'Doe')
p.sayName()
