for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i)
  })
}

for (var x = 0; x < 5; x++) {
  (function (n) {
    setTimeout(function () {
      console.log(n)
    })
  })(x)
}
