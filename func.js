function test (fn) {
  const val = 'hello'
  fn(val)
}

test(function(val) {
  console.log(val)
})
