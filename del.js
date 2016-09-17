const person = {
  name: 'felipe',
  age: 'ho ha ha',
  interests: ['pool', 'darts', 'photog']
}

console.log('orig:', person)
const newperson = {
  ...person,
  age: 30
}
console.log('new person:', newperson)

const {age, ...agedeleted} = person
console.log('age deleted:', agedeleted)

console.log('orig:', person)
