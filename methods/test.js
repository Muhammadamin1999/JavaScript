//types
// primative, abstract operations, coercion, equality, typescript
// undefined vs undeclared vs uninitialized
//NaN 
// use new : object(),array(),function(),date(),regexp(),error()
// don't use new string(), number(), boolean()
// forEach
// const products = [{
//     name: 'laptop',
//     price: 1000,
//     count: 5
// },{
//     name: 'Hp',
//     price: 103,
//     count: 3
// },{
//     name: 'oFJ',
//     price: 100,
//     count: 9
// }
// ]
// const totalProdectsValue = products.map(item =>({
//     name: item.name,
//     totalValue: item.price * item.count
// }))
// console.log(totalProdectsValue)

//let sum =0
// numbers.forEach(number=>{
//     sum += number
// })
// console.log(sum)
// Map()
// const numberDouble = numbers.map(multiply)
// function multiply(value, index, arr){
//     return value * index
// }
// console.log(numberDouble)
// console.log(numbers)

// const str = ['1','2','3','4']

// const numbers = str.map(Number)
// console.log(numbers)

// const numbers = [1,2,3,4,5,6]

// const even = numbers.filter(isEven)
// function isEven(value){
//     return value%2 === 0
// }
// console.log(even)

// const people = [
//     {
//         name: 'Florin',
//         age: 26
//     },
//     {
//         name: 'Ivan',
//         age: 18
//     },
//     {
//         name: 'Jai',
//         age: 16
//     }
// ]
// const adults = people.filter(person => person.age >= 18)

// const numbers = [1,2,2,3,6,3,5,5,6]
// const nums = numbers.filter((value,index,arr)=>{
//     return arr.indexOf(value) === index
// })
// console.log(nums)

//const numbers = [1,2,3,4,5,6,7]
// const total = numbers.reduce(sum,0)

// function sum(accum, value){
//     return accum + value
// }
// console.log(total)
// const max = numbers.reduce(callback, -Infinity)
// function callback(accum, value){
//     if(accum > value){
//         return accum
//     }else{
//         return value
//     }
// }
// console.log(max)
//  function fillInNumbers(n){
//     return Array(n).fill(0).map((_,idx)=> idx+1)
//  }
// console.log(fillInNumbers)
// const str = 'coding is fun'

// const res = str.split('').reverse().join('')
// console.log(res)

// const letters = ["a", "b", "c"];

// const alphaNumeric = letters.concat(1, [2, 3]);

// console.log(alphaNumeric);
// results in ['a', 'b', 'c', 1, 2, 3]
// const num1 = [[1]]
// const num2 = [2,[3]]
// const num3 = num1.concat(num2)
// console.log(num3)
// num1[0].push(5)
// console.log(num3)
// console.log([1, ,2].concat([3,4]))
