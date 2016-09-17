function sum (...args) {
  if (args.length < 1) return 0
  var [runningTotal, ...remaining] = args
  return runningTotal + sum(...remaining)
}

console.log(sum(1,2,3,4))
