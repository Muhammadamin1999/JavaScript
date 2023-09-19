// there are 6 primitive data types

//1 number
// let x = 5
// console.log(typeof(x))
// //2 string
// let y = 'str'
// console.log(typeof(y))
// //3 null 
// let z = null
// console.log(typeof(z))
// //4 undefined
// let a 
// console.log(typeof(a))
// //5 bool
// let b = false
// console.log(typeof(b))
// //6 symbol
// let c = Symbol('za')
// console.log(typeof(c))


// not objects : undefined, string, number, bool, object, symbol, null, bigint
// objects: object, function, array

// undefined has place in memory but no have value
// undeclared no place in memory it gives reference error
// uninitialized

// NaN - invalid number
// biron narsaga number assign qilmochi bolsak 0 berish xato 
// chunki 0 ni o'zi ham nimanidur ifodalaydi, shuni o'rniga NaN beramiz
// let myAge = Number("0o46")
// let str = 'a'
// console.log(typeof(myAge))
// console.log(myAge)
// console.log(myAge - str) // nan
// console.log(myAge + 'a') // 38a
// console.log(myAge * '8') // 304
// console.log(myAge +'5') // 385
// console.log(myAge - '5') // 33
// console.log('b' * 'a') // nan

// nan always gives nan with any mathematical operation

// isNaN("123") is false cause isNaN tries to change 123 to Number first
//isNaN("hello") is true cause isNan tries to change hello to number but he can't so that it assigned NaN

// console.log(isNaN("1"))

// negative -0

// var trendRate = -0
// console.log(trendRate === -0)  // true
// console.log(trendRate === "-0") // false
// console.log(trendRate === "-0")// false
// console.log(trendRate < 0) // false
// console.log(trendRate > 0) // false
// console.log(Object.is(trendRate, -0) ) // true
// console.log(Object.is(trendRate, 0) ) // false

// console.log(trendRate == -0) true

// Math.sign(-0) // -0
// Math.sign(0) // 0

// function formatTrend(trendRate){
//     var direction = 
//     (trendRate < 0 || Object.is(trendRate, -0)) ? "👇" : ""
//     return `${direction} ${Math.abs(trendRate)}`
// }
// console.log(formatTrend(-3))

// use new: Object(), Array(), Function(), Date(), RegExp(), Error()
// don't use new: Boolean(), Number(), String()

// let arr1 = () => {return 1}
// let arr2 = 1

// console.log(arr1 === arr2) // ikkita array doim false beryapti == / ====
// console.log(arr1 == arr2)
// agar bitta num bitta string yoki array bolsa == true / === false beryapti 
// shu yeriga coercion paydo bolyapti
// objectga string yoki num taqqoslasak false berypayi ikkala holatda ham
// function ham yemadi
// let a = {}
// console.log(a.toString())
//console.log(typeof a)
// null toString da error beryapti, BIRON SONGA KOPAYTIRSAK 0 CHIQYAPTI
// undefined o'zicha chiqadi biron songa aralashsa NaN CHIQADI
// 0 0 chiqadi
// lekin -0 0 chiqadi
// [] hech nima chiqdi raqam ayirsam ayiruvchini ozi chiqdi
//[1,2,3] dan 1,2,3 string chiqdi ayrisam , NaN chiqdi
// array typeof object qaytaryapti , function function qaytaryapti
// empty arraylar vergulni o'zini qaytaradi
// ,,, verguldan vergul qaytadi
// obj dan [object qaytadi]
// toString(){return "X"} dan X qaytadi

// let a = undefined
// console.log(Number(a))
// "" 0 
//"5" 5
//"-0" -0
// "009" 9
//"0" 0
// ".9" 0.9
// ".0"  0
//"." NaN
//"na" NaN
//"0xaf" 175
// "false" NaN
// false 0
//"1" 1
// null 0
//"null" NaN
// agar "" ichida raqamdan tashqari lyuboy string bolsa num ga o'zgarganda NaN
// undefined NaN


// let a = {valueOf(){return 3}}
// console.log(a.toString())
// console.log(Number(a))
// [""] toStringda hech nima Number da 0
// ["0"] ikkalasida ham 0
//["-0"] ikklasida -0
// [null] toStringda hech nima Numberda 0
//[undefined] toStringda hech nima Numberda 0
// [1,2,3]  to stringa 1,2,3 Numberda NaN
// [[[]]] to Stringda hech nima numberda 0
// {} toStringda [object Object] Numberda NaN
//  valueOf(){return 3} object Object stringda, Numberda 3

// let a = undefined
// console.log(Boolean(a))
// false => false, true => true
// "" => false, ichiga lyuboy narsa tushsa true
// null false
// undefined  false
// NaN false
// undefined false
// qolgan hammasi to'g'ri

// Coercion
// let a = 16
// console.log(`there are ${a + ""} students`)
// console.log(typeof(a))
// console.log('hello' + a)
// console.log(typeof(a))

//console.log( "0" == 0)
// carefull == with 0 , ""," ", non-primative, true or false
// USE == WHEN YOU KNOW THE TYPES YOU ARE COMPARING
// USE === WHEN YOU DON'T KNOW TYPES

// function declaration
// function multipleByTwo(x){
//     return x * 2
// }
// // function expression

// var fun = multipleByTwo(x)
// {
//     return x * 2
// }
// //arrow function expression

// var fun = (x)=>{
//     return x * 2
// }

//var teacher = "Kyle"

// function anotherTeacher(){
//     var teacher = "Suzy"
//     console.log(teacher)
// }
// (anotherTeacher)()
// (function anotherTeacher(){
//     var teacher = "Suzy"
//     console.log(teacher)
// })()
//IIFE
// (function(teacher){
//     console.log(teacher)
// })("Suzy")
// console.log(teacher)
//(function(){})()

// hoisting

// teacher()
// otherTeacher()

// function teacher(){
//     return "Kyle"
// }

// var otherTeacher = function(){
//     return "Suzy"
//}
// {
//     teacher = "Kyle"
//     let teacher
// }
// gave an error cannot access teacher before initialization

// var teacher = "kyle"

// {
//     console.log(teacher)
//     //let teacher = "Suzy"
// }

// function ask(question){
//     setTimeout(function waitASec(){
//         console.log(question)
//     },100)
// }
// ask("what is closure")

// var teacher = "Kyle"

// var myteacher = function(){
//     console.log(teacher)
// }
// teacher = "Suzy"

// myteacher()

// var workshop = (function Module(teacher){
//     var publicAPI = {ask, }
//     return publicAPI

//     function ask(question){
//         console.log(teacher,question)
//     }
// })("Kyle")

// workshop.ask("It's a module, right?")

// var teacher = "Kyle"

// export default function ask(question){
//     console.log(teacher,question)
// }
// import ask from "address of .js file"

// module 1
// export function great(name){
//     console.log("Hello" + " my " + name )
// }
// export const message = "Welcome"
// // module 2
// import {great, message} from ".module1.js"
// great("John")
// console.log(message)

// var workshop = {
//     teacher: "Kyle",
//     ask(question){
//         console.log(this.teacher, question)
//     }
// }
// workshop.ask(" what is impilict")

//function ask(question){
//     console.log(this.teacher, question)
// }

// var workshop1 = {
//     teacher: "Kyle",
//     ask: ask,
// }
// var workshop2 = {
//     teacher: "Suzy",
//     ask: ask,
// }

// workshop1.ask(" How do i share the method?")
// workshop2.ask(" What is important")
//explixit binding
// function ask(question){
//     console.log(this.teacher, question)
// }

// var workshop1 = {
//     teacher: "Kyle"
// }
// var workshop2 = {
//     teacher: "Suzy"
// }
// ask.call(workshop1, "Heelo")
// ask.call(workshop2, "World")

// class
// class Workshop{
//     constructor(teacher){
//         this.teacher = teacher
//     }
//     ask(question){
//         console.log(this.teacher, question)
//     }
// }
// var teacher1 = new Workshop("Kyle")
// var teacher2 = new Workshop("Suzy")

// teacher1.ask("is 1 teacher")
// teacher2.ask("is 2 teacher")

// class Workshop{
//     constructor(teacher){
//         this.teacher = teacher
//     }
//     ask(question){
//         console.log(this.teacher, question)
//     }
// }
// class AnotherWorkshop extends Workshop{
//     speakUp(msg){
//         this.ask(msg)
//     }
// }

// var teacher1 = new AnotherWorkshop("Kyle")
// teacher1.speakUp("is 1 teacher")

// super
// class Superclass {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   class Subclass extends Superclass {
//     constructor(name, age) {
//       super(name); // Calls the constructor of the superclass with 'name'
//       this.age = age;
//     }
  
//     logDetails() {
//       console.log(`Name: ${this.name}, Age: ${this.age}`); // Accesses the 'name' property of the superclass
//     }
//   }
  
//   const obj = new Subclass("John", 25);
//   obj.logDetails();
  // Output: Name: John, Age: 25
// class Workshop{
//     constructor(teacher){
//         this.teacher = teacher
//     }
//     ask(question){
//         console.log(this.teacher, question)
//     }
// }
// class AnotherWorkshop extends Workshop{
//     speakUp(msg){
//         this.ask(msg)
//     }
// }

// var teacher1 = new AnotherWorkshop("Kyle")

// prototype
// function Workshop(teacher){
//     this.teacher = teacher
// }
// Workshop.prototype.ask = function(question){
//     console.log(this.teacher, question)
// }

// var deepJS = new Workshop("Kyle")
// var reactJS = new Workshop("Suzy")

// deepJS.ask("Is 'prototype' a class?")
// reactJS.ask("is it ugly?")

// function Workshop(teacher){
//     this.teacher = teacher
// }
// Workshop.prototype.ask = function(question){
//     console.log(this.teacher, question)
// }
// var deepJS = new Workshop("Kyle")
// deepJS.constructor === Workshop

// deepJS.__proto__ === Workshop.prototype
// Object.getPrototypeOf(deepJS) === Workshop.prototype

// function Workshop(teacher){
//     this.teacher = teacher
// }
// Workshop.prototype.ask = function(question){
//     console.log(this.teacher, question)
// }
// var deepJS = new Workshop("Kyle")

// deepJS.ask = function(question){
//     this__proto__ask.call(this.question.toUpperCase())
// }
// deepJS.ask("ts this fake polymorphism")


