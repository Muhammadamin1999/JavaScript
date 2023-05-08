// array yaratishning 3 xil usuli
// const arr1 = ["apple", "banana"]
// const arr2 = new Array("apple", 'banana')
// const arr3 = "apple, banana".concat(", ")
// arraydan string yasash
// const fruits = ["appale", "banana"]
// console.log(fruits.join(", "))

// arraydan copy qilib new array qilishni ham 3 ta usuli bor
// const fruits = ["appale", "banana"]
// const copyArray1 = [...fruits] // spread syntax usuli
// const copyArray2 = Array.from(fruits)
// const copyArray3 = fruits.splice()
// for deep copy of an array use JSON.stringfy() to change it to number use JSON.parse()
const fruits = ["appale", "banana"]
const fruitsCopy =  JSON.parse(JSON.stringify(fruits))
console.log(fruitsCopy)