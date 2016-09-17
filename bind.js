function test (a, b) {
  console.log('A:', a)
  console.log('B:', b)
}

// 100 will be the first argument
test = test.bind(null, 100)

test(3, 4) // 100, 3
