function test(data, cb) {
  cb()
  return {
    foo: 'bar',
    data: data
  }
}

var x = test('hello', function () {
  // how can i reference x???
  console.log(x.foo)
})
