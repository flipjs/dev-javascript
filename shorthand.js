const person = {
  name: {
    first: 'felipe',
    last: 'apostol'
  }
}

const {name: {first: f}} = person
console.log(f)
