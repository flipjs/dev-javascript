'use strict'

// Not efficient, could cause stack overflow earlier.
// let factorial = num => {
//   if (num === 1) return 1
//   return num * factorial(num - 1)
// }
// console.log(factorial(16000)) // cant handle 16,000 anymore

// Efficient, by using closure.
const factorial = (function () {
  var acc = 1
  const f = (num) => {
    acc *= num
    if (num === 1) return acc
    return f(num - 1)
  }
  return f
})()
console.log(factorial(17000)) // can still handle 17,000

