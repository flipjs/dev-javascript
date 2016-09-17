// not a combinator!
function empty (list) {
  return !list.length
}

function not (bool) {
  return !bool
}

var list = []

console.log(empty(list))
console.log(not(empty(list)))
