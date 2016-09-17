'use strict'

// function test (params = {}) {
function test (params) {
  const defaults = {
    base: 'hello world',
    url: 'http://google.com',
    method: 'GET',
    endpoint: '/hello'
  }

  // const options = {
  //   ...defaults,
  //   ...params
  // }

  const options = Object.assign(
    {},
    defaults,
    params
  )

  return options
}

let options = test() // call without params is fine
options = test({base: 'test', params: {search: 'querystring'}})
console.log(options)
