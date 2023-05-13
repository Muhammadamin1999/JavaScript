// count digit
// function digitCount(n){
//     let count = 0
//     let x = n
//     while(Math.floor(x)!= 0){
        
//         x = x/10
//         count ++
//     }
//    return count    
// }
// let n=201
// let result = digitCount(n)
// console.log(result)

// reverse
// function reverseNumber(n){
//     let num = 21
//     let res = []
//     let count = 0
//     let final = 0
//    while(Math.floor(num) >1){
//     res += num %10
//     num = num/10
//     count++
//    }
//    for(let i=0; i<count; i++){
//       final += res[i]*Math.pow(10,count-i-1)

//    }
//    console.log(final)

// }
// let n=201
// let result = reverseNumber(n)
// console.log(result)
// let N = 123
// let num = N
// let reverse = 0
// let count = 0
// while(Math.floor(num) != 0){
//     num = num/10
//     count++
// }
// let sum =0
// while(count > 0){
//     let  digit = N%10
//     N = N/10
//     reverse += Math.pow(10,count-1) * Math.floor(digit)
//     count--
// }
// console.log(reverse)
// let N = 123
// let x = N
// let num = N
// let reverse = 0
// let count = 0
// while(Math.floor(num) != 0){
//     num = num/10
//     count++
//     console.log(N)
// }

// while(count > 0){
//     let  digit = N%10
//     N = N/10
//     reverse += Math.pow(10,count-1) * Math.floor(digit)
//     count--
// }
// // console.log(N)
// // console.log(x)
// // console.log(reverse)
// if(x === reverse){
//     console.log(true)
// }
// let n=123
// let num2 = n.toString()
// let result = num2.split().reverse().toNumber()
// console.log(result)
// let num1 = 14
// let num2 = 8
// let num3 = 0
// let num4 = 0
// for(let i = 2; i<= Math.min(num1,num2); i++){
//     if(num1 % i === 0 && num2 % i === 0){
//          num4 = i
//     }
// }
// //HCF
// num3 = Math.max(num1, num2)
// if(num3 % num1===0 && num3 % num2 === 0 ){
//     console.log(num3)
// }else if(num4 === 0){
//     console.log(num1*num2)
// }else{
//     let result = Math.min(num1,num2) / num4 * Math.max(num1,num2)
//     console.log(result)
// }



// GCD
// for(let i = 2; i<= Math.min(num1,num2); i++){
//     if(num1 % i === 0 && num2 % i === 0){
//          num3 = i
//     }
// }
// console.log(num3)

// armstroong number

// let num = 153
// let result = num.toString().split("").map(Number)
// let final = result.reduce((accumlator, element)=>accumlator + Math.pow(element,result.length) )

// console.log(final)
// let num = 16
// for(let i = 1; i<= num; i++){
//     var arr = 0
//     if(num % i === 0)
//     {
//        arr = i
//        console.log(arr)
//     }
    
// }
let num = 16
function isPrime(num)
{
for(let i=2; i<num; i++){
    if(num % i === 0){
        return false
    }
    else{
        return true
    }
}}
console.log(isPrime(num)) 
