/* eslint-disable arrow-parens */

const moment = require('moment')

const days = [100, 34, 234, 23, 9, 8, 7, 6, 5, 4, 3, 2, 1]

console.log('MOMENTS')
days.forEach((i) => {
  const mo = moment().format('Do MMMM YYYY, h:mm:ss a')
  console.log(mo)
  const m = moment().subtract(i, 'days').fromNow()
  console.log(m)
})

const x = () => console.log('test')

x()

const y = [1, 2, 4].map(i => i * i)
console.log(y)
