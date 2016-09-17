'use strict'

var myArr = [1, 2, 3, 4, 5]
var x = []

function twice (data, cb) {
  var list = data
  var result = []

  if (typeof cb !== 'function') {
    throw 'Expecting a callback function'
  }

  list.map(function (x) {
    result.push(cb(x))
  })
  return result
}

x = twice(myArr, function (item) {
  return item * 2
})

console.log(x)
