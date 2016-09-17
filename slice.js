var arr = [1, 2, 3, 4, 5]

// will array passed mutate? NO
function willItMutate (a) {
  // a.slice will prevent mutation
  // a = a.slice() // without this, global a will mutate
  // you can also use Object.assign
  a = Object.assign([], a)
  a.reverse()
  console.log(a)
}

console.log(arr)
willItMutate(arr)
console.log(arr)

var obj = {hello: 'world'}

// will object passed mutate? NO
function willObjMutate (o) {
  o = Object.assign({}, o)
  o.hello = 'foo'
  console.log(o)
}

console.log(obj)
willObjMutate(obj)
console.log(obj)
