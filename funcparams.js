const nums = {
  fizz: 1,
  buzz: 2
}
function test (options) {
  const {fizz, buzz} = options
  return fizz + buzz
}

const x = test(nums)
console.log(x)
console.log(nums)
