import test from 'tape'

test('This is a test', t => {
  const actual = true
  const expected = true
  const message = 'true should equal to true'
  t.equal(actual, expected, message)
  t.end()
})

function wrapper (desc, fn) {
  test(desc, t => {
    console.log('test before wrapper...')
    fn(t)
    console.log('test after wrapper...')
  })
}

wrapper('Test inside a wrapper', t => {
  const actual = 2
  const expected = 2
  const message = '1 should equal to 1'
  t.equal(actual, expected, message)
  t.end()
})

function decorate (test) {
  return function wrapper (desc, fn) {
    test(desc, t => {
      console.log('test before decorate...')
      fn(t)
      console.log('test after decorate...')
    })
  }
}

const tapetest = decorate(test)
tapetest('Test inside a decorator', t => {
  const actual = 4
  const expected = 4
  const message = '1 should equal to 1'
  t.equal(actual, expected, message)
  t.end()
})

