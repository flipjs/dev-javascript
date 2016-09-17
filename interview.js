// create a palindrome test
'use strict'

function isPal (str) {
  str = str.toLowerCase()
  return str === str.split('').reverse().join('')
}

console.log(isPal('hello'))
console.log(isPal('racecar'))
console.log(isPal('level'))
console.log(isPal('google'))

// ========================================================

function sum (x, y) {
  if (y === undefined) {
    return function (y) {
      return x + y
    }
  } else {
    return x + y
  }
}

console.log(sum(1, 2))
console.log(sum(4)(5))

// ========================================================

function isInteger (x) {
  // return (x === parseInt(x, 10))
  return ((typeof x === 'number') && (x % 1 === 0))
}

console.log(isInteger(24))
console.log(isInteger(25.1))
console.log(isInteger('24'))

// ========================================================

function f (n) {
  return n > 1 ? n * f(n - 1) : n
}

console.log(f(4))

// ========================================================

function log () {
  var args = Array.prototype.slice.call(arguments)
  args.unshift('[Philip]')
  console.log.apply(console, args)
}

log('hello', 'world')

// ========================================================

for (var i = 0; i < 10; i += 1) {
  setTimeout(console.log.bind(console, i), 10)
}

