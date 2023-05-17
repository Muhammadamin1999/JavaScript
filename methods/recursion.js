// n = 1
// function recursiveFun(n)
// {
//     if(n==11){
//         return 
//     }
//     console.log(n)
//     n++
//     return recursiveFun(n)
// }
// recursiveFun(n)
// const name="amin"
// let nTimes = 3
// let i = 0
// function repeatName(name, n){
//     if(i === n) return
//     i++
//     console.log(name)
//     return repeatName(name, n)
// }
// repeatName(name, nTimes)
// let num = 5
// nTimes(num)
// function nTimes(num){
//     if(num === 0) return
//     console.log(num)
//     num--
//     return nTimes(num)
// }

// let sum =0
// let num = 5
// let i = 0
// numSum(sum,num)

// function numSum(sum , num){
//     if(i === num)return console.log(sum)
//       ++i
//       sum +=i 
//     return numSum(sum, num)
    
// }

// let sum = 1
// let num = 5
// let i = 0
// factorial(sum, num)
// function factorial(sum, num){
//     if(i === num) return console.log(sum)
//     ++i
//     sum *=i
//     return factorial(sum, num)
// }

// let arr = [1,2,3,4]
// function reversedArray(arr, start=0, end= arr.length-1){
//   if(start >=end) return arr
//   [arr[start], arr[end]] = [arr[end], arr[start]]
//   return reversedArray(arr, start+1, end-1)
// }
// console.log(reversedArray(arr))

// function reverseArray(arr, start = 0, end = arr.length - 1) {
//   if (start >= end) {
//     return arr; // base case: array is fully reversed
//   }
  
//   // swap elements at start and end indices
//   [arr[start], arr[end]] = [arr[end], arr[start]];
  
//   // recursively reverse the rest of the array
//   return reverseArray(arr, start + 1, end - 1);
// }

// const myArray = [1, 2, 3, 4, 5];
// console.log(reverseArray(myArray)); // [5, 4, 3, 2, 1]
// let str = "ABCDE"
// let str2 = str.split("")
// let num = []
// let num2 = []
//  for(let i=0; i<str2.length; i++){
//   num[i] = str.charCodeAt(i)
//  }


// function isPalindrom(num, num2){

// function reverseArray(arr, start =0, end =str2.length -1){
//   if(start >=end){
//     return arr
//   }
//   arr[arr[start], arr[end]] =[arr[end], arr[start]]
//   return reverseArray(arr, start+1, end-1)
// }
//   if(num.every((element)=> element===num2[element])) return true
//   else return false
// }

// console.log(isPalindrom(str))
// let n =5
// function recursiveprint(n){
//     if(n>=1){
//         console.log(n)
//         recursiveprint(n-1)
//     }
// }

// recursiveprint(n)
// let n = 5
// function sumOfn(n){
//     if(n>0){
//         return sumOfn(n-1) + n
//     } return 0
// }
// const result = sumOfn(n)
// console.log(result)
// function sum(arr){
//     if(arr.length === 0) return 0

//     const firstNum = arr[0]
//     const remainingNum = arr.slice(1)
//     return firstNum + sum(remainingNum)
// }
// const arr = [1,2,3,4,5]
// const res = sum(arr) 
// console.log(res)
function addTwo(x) {
    return x + 2;
  }
  
  function multiplyByThree(x) {
    return x * 3;
  }
  
  function subtractTen(x) {
    return x - 10;
  }
  
  // Function composition
  const composedFunction = subtractTen(multiplyByThree(addTwo(5)));
  console.log(composedFunction); // Output: 19
  