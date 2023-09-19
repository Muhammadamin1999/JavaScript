const arr = []
for(let i =1; i<=20; i++){
     arr[i]=i
}
console.log(arr.reduce((accumlator,elem)=> accumlator + elem))

const odd = arr.filter((elem)=> elem % 2 === 1)
const result1 =  odd.reduce((accum, elem)=> accum + elem)
const even = arr.filter((elem)=> elem % 2 === 0)
const result2 = even.reduce((accum, elem)=> accum + elem)

console.log(result1)
console.log(result2)

console.log(arr.at(-5))
const reslut3 = odd.concat(even)
console.log(reslut3)
console.log(odd.every((elem)=> elem%2 === 1))
console.log(even.some((x)=> x%2 ===1))
const arr2 = new Array(100).fill(0)
console.log(arr2)

Array.from(Array(10).keys())
//[...Array(10).keys()]
Array.from({length: 10}, (_, i) => i + 1)
console.log(arr.find((x)=> x > 15))
const arr3 = [1,[2,3],[3,4,[5]]]
console.log(arr3.flat())
// review flat and flatMap
console.log(arr.some((x)=> x===20))
console.log(arr.indexOf(20))
console.log(Array.isArray(arr))
// array.isArray()
const arr4 = [1,2,3,4,5,6]

console.log(arr4.splice(2,3,5))
console.log(arr4)

