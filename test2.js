function sum (...args) {
  if (args.length <= 0) return 0
  const [first, ...next] = args
  return first + sum(...next)
}

console.log(sum(1,2,3,4,5))
