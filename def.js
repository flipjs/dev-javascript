const A = 10
const B = 100

function add (a = A, b = B) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('add(): params must both be a number.')
  }
  return a + b
}

const sum = add(undefined, 1)
console.log(sum)
