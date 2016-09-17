var store = {
  state: {},
  getState () {
    return state
  },
  dispatch (action) {
    return action
  }
}

function logger(store) {
  var next = store.dispatch
  return function addLogger(action) {
    console.log(action)
    var result = next(action)
    return result
  }
}

const dispatch = logger(store)

const result = dispatch({hello: 'world'})
