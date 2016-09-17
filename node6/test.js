let fun = (...params) => console.log(params.length)

fun()
fun(1)
fun(1, 2)
fun(1, 2, 3)

module.exports = fun
