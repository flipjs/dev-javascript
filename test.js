function subscribe (observer) {
  observer.next(435)
  observer.next(324)
  observer.next(56)
}

subscribe({
  next (x) {
    console.log(x)
  }
})

