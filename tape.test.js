var test = require('tape')
function sum (a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Arguments must be a number')
  }

  return a + b
}

test('sum', (t) => {
  var actual = sum(2, 4)
  var expected = 6
  t.equal(
    actual,
    expected,
    'it should return a sum of 2 numbers'
  )
  t.end()
})

test('sum', (t) => {
  var actual = sum(4, 9)
  var expected = 13
  t.equal(
    actual,
    expected,
    'it should be equal'
  )
  t.end()
})

