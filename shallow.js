const arr1 = [{a:1}, {b:2}]

const arr2 = arr1.slice(0)
// const arr2 = arr1.map(item => item)

console.log(arr1 == arr2)

arr1[0].a = 99

console.log('arr1', arr1)
console.log('arr2', arr2)
