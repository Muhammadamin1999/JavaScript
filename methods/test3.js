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

var trendRate = -0
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

