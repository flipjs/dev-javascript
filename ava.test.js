import test from 'ava'
import sinon from 'sinon'

test('Async test', (t) => {
  const actual = 'hello'
  const expected = 'hello'
  const message = 'hello should equal hello'
  return Promise.resolve(actual)
    .then(actual => t.is(actual, expected, message))
})

test('one plus one is two', t => {
  t.is(1 + 1, 2)
})

test('mocking', t => {
  const myFunc = sinon.spy()
  myFunc()
  myFunc()
  t.true(myFunc.calledTwice)
})
