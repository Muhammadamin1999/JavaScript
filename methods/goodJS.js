// good parts
//grammar
// names: use anything except abstract, boolean, break, byte, case, catch
// char class const continue debugger default delete do double...
// NaN equeals nothing
// infinity
// string with \
// \" double quote
// all below comes after \
// ' single quote
// \ backslash
// / slash
// b backspace
// f formfeed
// n new line
// r carriage return
// t tab
// u for hexadecima; digits  "A" === "\u0041"
// falsy values: false, null, undefined, 0 , NaN , ''
//in js there are objects and primitives
// obj can be empty = {} or full = {a:5, b:6}
// nested obj ham bolishi mumkin a = { b:{4} } both a and b are objs
//scope
// global scope, outsite of any block and can be accessed from anywhere
// local scope, inside block
// naming camel case only first letter in small and every new word starts with capital 
// exponetional values 10**n
// use two dots: 5 ..toExponential
// put space before the dot
// 5 .toExponential()
// 5.0.toExponential()
// (5).toExponential()
// difference between points++ and ++points 
// let points = 6
// console.log(points++) // 6 qaytaradi
// console.log(points) //7
// console.log(++points) //8
// console.log(points) //8
// thi biggest value js can handle is 1e308
// above this we use Infinity
// let a = NaN
// console.log(typeof(a)) // number
//string to number
// Number() or + '8'
//number to  string
//String(3) or 3 + ""  3..toString() 
// changing string to num using pareInt()
//parseInt('1010',2) // binary to decimal
// parseInt('2.4', 10) // 2
// ^ it is bitwise xor operator
// ** power operator
// console.log(Number("0"))

// const question = 'whats it?'
// const answer = prompt(question)
// console.log(`the ansewr is ${answer}`)

//create array in two ways
// 1 let arr = []
// 2 let arr2 = new Array()
// array delete bolgandan keyin ham joyi undefined sifatida saqlanib qolyapti
// delete array[n]
// Destructuring array means devideing every single value into single array
// const [x,y] = [1,3]
// swapping [x,y] = [y,x]
// slice remove elems to sb array
// splice remove then add
// arr.splice(4,0, "hello")
// arr.splice(5,1) in that case it reomves only and unlike delete it does not leave undefined
//

//Sets
// sets are data structure that containe only unique value
// const list = new Set()
// values are added using add()
// const moreNumbers = new Set([2,2,2,3,3,4,5,5])
// Set(4) { 2, 3, 4, 5 }
// const moreNumbers = new Set([2,2,2,3,3,4,5,5])
// console.log(moreNumbers)
// Set Methods
// size() -> shows sets size
// has() -> check if the value is in a set
// delete() -> retruns true if the value wis here and deleted
// clear() -> remove all

//Set to Array using ... spread operator
// creating set of three items
// const shoppingList = new Set().add('a').add('.b').add('.c')
// const shoppingArray = [...shoppingList]
// console.log(shoppingArray) 
// [ 'a', '.b', '.c' ]
// using Array.from()
// const shoppingArray = Array.from(ShoppingList)

// how to find duplicate
// const duplicate = [2,2,2,3,3,3,6,6,6,7,7,7,1,1,1]
// const nonDuplicate = [...new Set(duplicate)]
// console.log(nonDuplicate.sort((a,b)=> a-b))

//const weak = new WeakSet()
//weak.add(2)  /// gives invalid value error
//const array = [1,2]
//weak.add(array) // WeakSet{} why empty but when we check 
// weak.has(array) it shows true
// we can only add non primatives to weak array NOT PRIMATIVES

// Map
// creating a map
//const romanNum = new Map()
// adding first value is key and the second is value and use set() to add
//Map(1) { 1 => 'T' }
//romanNum.set(1,'T')
// console.log(romanNum)
// we can use set methods like has()..
// a map can be created with nested array
//const heroes = new Map([['1','2'],['3','4']])
// to remove use .clear() cause .delete() will leave undefined

// converting maps to arrays
//[...MapName]
//or
//Array.from(MapName)
// weak Map same with weak set but as key primitives can be used

// ternary operator 
// condition ? //code to run if it is true : // code run if it is false

// in while loop it is okk
// let count = 9
// while(--count){

// }
// do {}while()

// instead of for loop ES6 recommend for of loop
// for(value of array){
//     console.log(value)
// }

// we can loop over sets with for of cause they are enumerable
// const letters = new Set('hello')
// for(const letter of letters){
//     console.log(letter)
// }

// itareting map
// const romanNum = new Map()
// romanNum.set(1,'I').set(2,'II').set(3,'III')
// // every map can be itareted via keys() following for-of loop
// for(const key of romanNum.keys()){
//     console.log(key)
// }

// // we can print values to using values()
// for(const value of romanNum.values()){
//     console.log(value)
// }

// if we want to show both we use entries

// obj
// let superman = {
//     name: Clark,
//     surname: Kent
// }

// let spiderman = new Object()

// superman.name // using dot notation
// super['name'] // via []

// in can be used to check if the obj has particular property
//'city' in superman result false
// or we use hasOwnProperty()
// for iterate over obj use for of and then Object.values() it shows only values
// for value of Object.entries() shows both value and property

// json
// string olib obj qilib qaytarib beradi
// const batman = {name: hello,
//  surname : world
// }
// JSON.parse(batman) // pase JSON datani string qiladi

//stringfy() string data ni JSON qiladi
 
let obj = {
    a: "hello world",
    b: 4
}
let b= 'a'
console.log(obj[b]) 
console.log(obj['b']) 
console.log(obj.b)