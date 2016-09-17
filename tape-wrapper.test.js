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
    console.log('test before...')
    fn(t)
    console.log('test after...')
  })
}

wrapper('Test inside a wrapper', t => {
  const actual = 1
  const expected = 2
  const message = '1 should equal to 1'
  t.equal(actual, expected, message)
  t.end()
})
