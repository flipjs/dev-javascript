function add (...args) {
  const [a, ...next] = args
  if (args.length <= 0) return 0
  return a + add(...next)
}

console.log(add(1, 2, 3, 4, 5))
