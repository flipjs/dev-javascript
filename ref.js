function ref (o) {
  o.role = 'admin'
}

function immute (str) {
  str = 'foobar'
}

var person = {
  name: 'felipe'
}

ref(person)
console.log(person)

var hello = 'hello world'
immute(hello)
console.log(hello)
