const people = [
  {name: 'randy'},
  {name: 'felipe'},
  {name: 'onie'}
]

let newPeople = people.map(person => person) // ref to person is still the same
// const newPeople = people.map(person => ({...person})) // now this is a new copy of objects inside the new array
// const newPeople = [...people] - same result as above

// newPeople is a new object, hence not (triple) equal
console.log('is people equal to newPeople?', newPeople === people) // false
// true. why? because inside both arrays are objects pointing to same reference
console.log('is first person equal?', people[0] === newPeople[0])
// try updating first person in people, newPeople gets updated as well
people[0].name = 'joriz'
console.log('people:', people)
console.log('newPeople:', newPeople)

// OK, lets start again
console.log('OK, LETS START AGAIN')

const people2 = [
  {name: 'randy'},
  {name: 'felipe'},
  {name: 'onie'}
]

// let newPeople2 = people2.map(person => person) // ref to person is still the same
const newPeople2 = people2.map(person => ({...person})) // now this is a new copy of objects inside the new array
// const newPeople2 = [...people2] - same result as above

// newPeople2 is a new object, hence not (triple) equal
console.log('is people2 equal to newPeople2?', newPeople2 === people2) // false
// true. why? because inside both arrays are objects pointing to same reference
console.log('is first person equal?', people2[0] === newPeople2[0])
// try updating first person in people2, newPeople2 gets updated as well
people2[0].name = 'joriz'
console.log('people2:', people2)
console.log('newPeople2:', newPeople2)

