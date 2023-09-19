// forEach VS for loop
// break ni faqat for da ishlata olamiz
// const letters = ["a","b","c"]
// letters.forEach(function(element, index){
//     console.log('index: ',index)
//     console.log('element: ', element)
// })

//map()
// const numbers = [1,2,3,4]
// const squared = numbers.map((value)=>value*value)

//filter()
// const numbers = [9,1,8,2,5]
// const result = numbers.filter((value)=> {return value>5 })

// find find an element findIndex() find the index of element
//const result = users.find(user=> user.name === "James")

// every dan farqli tarzda some un orasida 1 ta ture or false bolsa yetadi
// const hasFive = numbers.some(value=> value.numbers === 5)

// every method hamma case true bo'lishi kk
// const numbers = [5,1,3]
// const allPositive = numbers.every((number)=>{
//     return number >= 0
// })
// this equal to 
// const allPositive = numbers.every(number => number >= 0)
// console.log(allPositive)

//const letters = ["a","b","c"]

// letters.forEach(function(element, index){
//     console.log('index: ', index)
//     console.log("element: ", element)
// })
//letters.forEach(elem=>console.log(elem))

// const numbers = [9, -1, 8]
// const obj = {
//     nane: 'value'
// }
// const allPositive = numbers.every(function(number){
//     console.log(this)
//     return number >= 0
// },obj)

const cart = [
{
    name: 'laptop',
    price: 234
},
{
    name: 'mouse',
    price: 578
},
{
    name: "keyboard",
    price: 390
}
]
let total = 0