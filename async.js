function request () {
  let x = 0
  setTimeout(function () {
    console.log('hello')
  }, 1000)
}

async function hello () {
  await request()
}

hello()
