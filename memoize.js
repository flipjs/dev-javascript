function memoize (fn) {
  var cache = {}
  return function callFn (n) {
    if (cache[n] === undefined) {
      cache[n] = fn(n)
    }
    console.log(cache)
    return cache[n]
  }
}

function square (n) {
  return n * n
}

function cube (n) {
  return n * n * n
}

var mSquare = memoize(square)
var mCube = memoize(cube)

console.log(mSquare(5))
console.log(mSquare(5))
console.log(mSquare(1))
console.log(mSquare(2))
console.log(mSquare(3))
console.log(mSquare(4))
console.log(mSquare(5))
console.log(mSquare(5))
console.log(mSquare(5))
console.log(mSquare(5))
console.log(mSquare(9))
console.log(mCube(5))
console.log(mCube(5))
console.log(mCube(1))
console.log(mCube(2))
console.log(mCube(3))
console.log(mCube(4))
console.log(mCube(5))
console.log(mCube(5))
console.log(mCube(5))
console.log(mCube(5))
console.log(mCube(9))
