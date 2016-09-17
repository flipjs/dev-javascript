function stringValidator (fn) {
  return function (str) {
    if (typeof str !== 'string') {
      return 'Argument is not a string'
    }
    return fn(str)
  }
}

// @stringValidator
function hello (str) {
  return str
}

hello = stringValidator(hello)

console.log(hello('hello'))
