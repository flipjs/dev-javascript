function Person () {
}

Person.prototype.setName = function (name) {
  if (typeof name !== 'string') {
    // throw new Error('Not a string!')
    // const err = new Error('Not a string!')
    // console.error(err.stack)
  }
  validateString(name)
  this.name = name
}

Person.prototype.sayName = function () {
  console.info(this.name)
}

function validateString (string) {
  if (typeof string !== 'string') {
    throw new Error('Not a string!')
  }
}

const p = new Person()
p.setName('Felipe')
p.sayName()
p.setName(23423423)
p.sayName()
