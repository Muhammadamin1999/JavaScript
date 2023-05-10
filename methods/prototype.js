// const page = document.getElementById("prototype")
// const arr = ["a","b","c"]

// for(letter of arr){
//     const li = document.createElement("li")
//     li.textContent = letter
//     page.appendChild(li)
// }
// const fruits = ["apple", "banana", "grapes", "mango", "orange"];
// function filterItems(arr,query){
//     return arr.filter((el)=>el.toLowerCase().includes(query.toLowerCase()))
// }

// console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
// console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']
// const arr = [1,2,2,4,5,5,4,3,7]
// const set = new Set(arr.toString())
// const result= Array.from(arr)
// console.log(result)
// const myArray = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];
// const result = myArray.reduce((accumlator, currentValue)=>{
//     if(!accumlator.includes(currentValue) ){
//         return [...accumlator,currentValue]
//     }
//     return accumlator
// },[])

// console.log(result);

//const condition = (currentValue) => currentValue <=10
//console.log(arr.every(condition))
// console.log(arr.concat(arr2))
//console.log(arr.copyWithin(0,3))

// const arrayEntry = arr.entries()
// for(const [index, element] of arrayEntry){
//     console.log(index, element)
// }
// const isSubset = (arr,arr2) => arr2.every((elment)=>arr.includes(elment))
// console.log(isSubset)
//console.log(arr.fill(0,3,5))
//const result = arr.filter(element=> element >= 5)
// function isPrime(num){
//     for(let i = 2; i < num ; i++){
//         if(num % i === 0){
//             return false
//         }
//     }
//     return num > 1
// }
// console.log(isPrime(arr))
// const result = arr.find(elem => elem >=2 )
// console.log(result)
// const array = new Array(3)
// for(let i = 0; i<array.length; i++){
//     arr[i] = new Array(4).fill(1)
// }
// console.log(arr[0][0])
// console.log(arr[1][0])
// console.log(arr[2][0])
// function isPrime(element, index, array){
//     let start = 2
//     while(start <= Math.sqrt(element)){
//         if(element % start++ < 1){
//             return false
//         }
//     }
//     return element > 1
// }
// console.log(isPrime(arr))

// const isLargeNumber = (element) => element >=10
// console.log(arr.findIndex(isLargeNumber))
// const lastElement = (element)=> element >=10
// console.log(arr.findLastIndex(lastElement))
//const arr = [1,2,2,4,5,5]
// const arr2 = []
// // console.log(arr.flat())
// arr.forEach((element)=>{
//     arr2.push(element)
// })
// console.log(arr2)
// console.log(arr.join(" - "))
// const iterator = arr.keys()
// for(const key of iterator){
//     console.log(key)
// }

// console.log(arr)
// const arr2 = arr.map(x => x*2)
// const arr2 = arr.map(x => Math.sqrt(x))
// console.log(arr2)
// const getMax = (a,b) => Math.max(a,b)
// console.log([1,200].reduce(getMax,50))
// const sum = [0,1,2,3,4].reduce((accumlator, element)=> accumlator+ element)
// console.log(sum)
// const arr = [1,4,3,5,5,3,6,2]
// arr.sort((a,b)=> a>b? -1:0)
// const result = arr.reduce((accumlator, element)=>{
//     if(!accumlator.includes(element)){
//         return [...accumlator, element]
//     }
//     return accumlator
// })

