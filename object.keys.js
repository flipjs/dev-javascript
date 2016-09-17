void (function () {
  'use strict'

  var data = {
    1: {
      id: 1,
      firstName: 'Felipe',
      lastName: 'Apostol',
      email: 'felipe@gmail.com'
    },
    2: {
      id: 2,
      firstName: 'Dharmesh',
      lastName: 'Kavia',
      email: 'dharmesh@gmail.com'
    },
    3: {
      id: 3,
      firstName: 'Adam',
      lastName: 'Bradbury',
      email: 'adam@gmail.com'
    },
    4: {
      id: 4,
      firstName: 'Joe',
      lastName: 'Kerr',
      email: 'joe@gmail.com'
    }
  }

  var arr = Object.keys(data).map(function (key) {
    return data[key]
  })

  console.log(arr)
})()

