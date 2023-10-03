// //challange 1

// function addTwo(a){
//     return a+2;
// }
// //challange 2
// function addS(s){
//     return s + "s";
// }
// //challange 3
// function map(input, callback){
//     let arr = [];
//     for(let i = 0; i< input.length; i++){
//         arr.push(callback(input[i]));
//     }
//     return arr;
// }
// map([1,2,3,4],addTwo);
// // challange 4
// function forEach(letters, callback){
//      let arr = [];
//      for(let i = 0; i< letters.length; i++){
//          arr.push(callback(letters[i])); 
//      }
// }

// // challange 5
// function mapWith(arr, callback){
    
//     forEach(arr,callback);
// }

// //challange 6

// function reduce(array, callback, initialValue){
//     let acc = initialValue;
//     for(let i=0; i<array.length; i++){
//         acc = callback(acc, array[i]);

//     }
//     return acc;
// }

// // challange 7

// function intersection(arrays){
//     return arrays.reduce((acc, cur)=>{
//         return cur.filter(el=>acc.includes(el))
//     })
// }

// // challange 8

// function union(arrays){
//    return arrays.reduce((acc, cur)=>{
//     const elements = cur.filter(el=> !acc.includes(el));
//     return acc.concat(elements);
//    })
// }

// // challange 9 

// function objOfMatches(array1, array2, callback){
//     const result = {};
//     for(let i=0; i > array1.length; i++){
//         if(callback(array1[i]) === array2[i]){
//             result[array1[i]] = array2[i];
//         }
//     }
// }

// // challange 10

// function multiMap(arrVals, arrCallbacks){

//     const obj = {};

//     for(let i=0; i< arrVals.length; i++){
//         obj[arrVals[i]]= [];
//         for(let j = 0; j< arrCallbacks.length; j++){
//             obj[arrVals[i]].push(arrCallbacks[j](arrVals[i]));
//         }
//     }
//       return obj;
// }

// challange 13


// Challenge 13
function prioritize(array, callback) {
    const arr=[];
    for(let i=0; i< array.length; i++){
      if(callback(array[i])){
         arr.unshift(array[i]);
         }else{
           arr.push(array[i]);
         }
    }
    return arr;
  }
  
  // /*** Uncomment these to check your work! ***/
  const startsWithS = function(str) { return str[0] === 's' || str[0] === 'S'; };
  console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS)); // should log:
  //['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']
  
  
  // Challenge 14
  function countBy(array, callback) {
      let result = {};
      let odd = 0;
      let even = 0;
      for(let num of array){
        let key = callback(num);
        key === "odd" ? (result[key] = ++odd) : (result[key] = ++even);
        
      }
    return result;
  }
  
  // /*** Uncomment these to check your work! ***/
  console.log(countBy([1, 2, 3, 4, 5], function(num) {
  if (num % 2 === 0) return 'even';
  else return 'odd';
  })); // should log: { odd: 3, even: 2 }
  
  
  // Challenge 15
  function groupBy(array, callback) {
       let result = {};
      for(let i of array){
        let decimal = callback(i);
        if(decimal in result){
          result[decimal].push(i);
        }else{
          result[decimal] = [i];
        }
        
      }
    return result;
  }
  
  // /*** Uncomment these to check your work! ***/
  const decimals = [1.3, 2.1, 2.4];
  const floored = function(num) { return Math.floor(num); };
  console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }
  
  
  // Challenge 16
  function goodKeys(obj, callback) {
       let result = [];
      for(let i in obj){
        if(callback(obj[i])){
          result.push(i);
        }
      }
    return result;
  }
  
  // /*** Uncomment these to check your work! ***/
  const sunny = { mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
  const startsWithBird = function(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
  console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']
  
  
  // Challenge 17
  function commutative(func1, func2, value) {
   let result1 = func1(func2(value));
   let result2 = func2(func1(value));
    return result1 === result2;
  }
  
  // /*** Uncomment these to check your work! ***/
  const multBy3 = n => n * 3;
  const divBy4 = n => n / 4;
  const subtract5 = n => n - 5;
  console.log(commutative(multBy3, divBy4, 11)); // should log: true
  console.log(commutative(multBy3, subtract5, 10)); // should log: false
  console.log(commutative(divBy4, subtract5, 48)); // should log: false
  
  
  // Challenge 18
  function objFilter(obj, callback) {
      let result = {};
    for(let i in obj){
      if(callback(i)=== obj[i]){
        result[i] = obj[i];
      }
    }
    return result;
  }
  
  // /*** Uncomment these to check your work! ***/
  const startingObj = {};
  startingObj[6] = 3;
  startingObj[2] = 1;
  startingObj[12] = 4;
  const half = n => n / 2;
  console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }
  
  
  // Challenge 19
  function rating(arrOfFuncs, value) {
    let count = 0;
      for(let key of arrOfFuncs){
        if(key(value)){
          count++;
        }
      }  
    return (count/arrOfFuncs.length) * 100;
  }
  
  // /*** Uncomment these to check your work! ***/
  const isEven = n => n % 2 === 0;
  const greaterThanFour = n => n > 4;
  const isSquare = n => Math.sqrt(n) % 1 === 0;
  const hasSix = n => n.toString().includes('6');
  const checks = [isEven, greaterThanFour, isSquare, hasSix];
  console.log(rating(checks, 64)); // should log: 100
  console.log(rating(checks, 66)); // should log: 75
  
  
  // Challenge 20
  function pipe(arrOfFuncs, value) {
         let result = value;
        for(let i of arrOfFuncs){
          result = i(result);
        }
    return result;
  }
  
  // /*** Uncomment these to check your work! ***/
  // const capitalize = str => str.toUpperCase();
  // const addLowerCase = str => str + str.toLowerCase();
  // const repeat = str => str + str;
  // const capAddlowRepeat = [capitalize, addLowerCase, repeat];
  // console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'
  
  
  // Challenge 21
  function highestFunc(objOfFuncs, subject) {
        let HighestKey = null;
        let HighestResult = -Infinity;
        for(let key in objOfFuncs){
           let result = objOfFuncs[key](subject);
          if(result > HighestResult ){
            HighestKey = key;
            HighestResult = result;
          }
        }
    return HighestKey;
  }
  
  // /*** Uncomment these to check your work! ***/
  const groupOfFuncs = {};
  groupOfFuncs.double = n => n * 2;
  groupOfFuncs.addTen = n => n + 10;
  groupOfFuncs.inverse = n => n * -1;
  console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
  console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
  console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'
  
  
  // Challenge 22
  function combineOperations(startVal, arrOfFuncs) {
      return pipe(arrOfFuncs,startVal);
  }
  
  function addTen(num) {
    return num + 100;
  }
  
  function divByFive(num) {
    return num / 5;
  }
  
  function multiplyByThree(num) {
    return num * 3;
  }
  
  // /*** Uncomment these to check your work! ***/
  console.log(combineOperations(0, [addTen, divByFive, multiplyByThree])); // Should output 60 -->
  console.log(combineOperations(0, [divByFive, multiplyByThree, addTen])); // Should output 10
  
  
  // Challenge 23
  function myFunc(array, callback) {
    let result = 0;
       for(let i=0; i< array.length; i++){
          if(callback(array[i])){
            result++
          }
       }
     return result !== 0 ? 1 : -1;
    
  }
  
  const numbers = [2, 3, 6, 64, 10, 8, 12];
  const evens = [2, 4, 6, 8, 10, 12, 64];
  
  function isOdd(num) {
    return (num % 2 !== 0);
  }
  
  // /*** Uncomment these to check your work! ***/
  console.log(myFunc(numbers, isOdd)); // Output should be 1
  console.log(myFunc(evens, isOdd)); // Output should be -1
  
  
  // Challenge 24
  function myForEach(array, callback) {
         for(let i=0; i<array.length; i++){
           callback(array[i]);
         }
  }
  
  let sum = 0;
  
  function addToSum(num) {
    sum += num;
  }
  
  // /*** Uncomment these to check your work! ***/
  const nums = [1, 2, 3];
  myForEach(nums, addToSum);
  console.log(sum); // Should output 6