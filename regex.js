const str = 'Is this This?'

const regex = /is/g

// var result = []
// while (result) {
//   result = regex.exec(str)
//   if (result) console.log(result.index)
// }

console.log(str.match(regex))

console.log(str.replace(regex, str => 'XX'))
console.log(str)
