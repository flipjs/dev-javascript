function Monad () {
  return function unit (value) {
    var monad = Object.create(null)
    monad.bind = function bind (fn) {
      return fn(value)
    }
    return monad
  }
}

var x = Monad()(10).bind(val => val * 10)
console.log(x)

