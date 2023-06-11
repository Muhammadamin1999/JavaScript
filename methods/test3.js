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












