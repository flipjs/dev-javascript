function initializeGenerator (generator) {
  const generatorObject = generator()
  generatorObject.next()
  return generatorObject
}

function * processTicket () {
  while (true) {
    var ticket = yield
    console.log(`Processing ticket no. ${ticket}`)
  }
}

function getRandomIntInclusive (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const dispatch = initializeGenerator(processTicket)

var ticket = getRandomIntInclusive(1, 100)
dispatch.next(ticket)
ticket = getRandomIntInclusive(1, 100)
dispatch.next(ticket)
ticket = getRandomIntInclusive(1, 100)
dispatch.next(ticket)
ticket = getRandomIntInclusive(1, 100)
dispatch.next(ticket)
