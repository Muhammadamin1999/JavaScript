// //challange 1
// function createFunction(){
//     return function(){console.log("hello")};
    
// }

// const function1 = createFunction();
// function1();

// // challange 2

// function createFunctionPointer(input){
//     return function(){
//         console.log(input);
//     }
// }
// const printSample = createFunctionPointer('sample');
// printSample();
// const printHello = createFunctionPointer('hello');
// printHello();

// // challange 3

// function outer() {
//     let counter = 0; // this variable is outside incrementCounter's scope
//     function incrementCounter () {
//       counter ++;
//       console.log('counter', counter);
//     }
//     return incrementCounter;
//   }
  
//   const willCounter = outer();
//   const jasCounter = outer();

  // Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
// willCounter();
// willCounter();
// willCounter();
// jasCounter();
// willCounter();

function addByX(x) {
   let initial = x;
   return function(start){
    console.log(initial + start);
   }

   
}

// /*** Uncomment these to check your work! ***/
//const addByTwo = addByX(2);
// addByTwo(1); // => should return 3
// addByTwo(2); // => should return 4
// addByTwo(3); // => should return 5

// const addByThree = addByX(3);
// addByThree(1); // => should return 4
// addByThree(2); // => should return 5

// const addByFour = addByX(4);
// addByFour(4); // => should return 8
// addByFour(5); // => should return 9


// // CHALLENGE 4
// function once(func) {
//     let output;
//     function callOnce(x){
//         if(output>0){
//             return output;
//         }else{
//         output = func(x);
//         return output;
//         }
//     }
//     return callOnce;
  
// }

// // /*** Uncomment these to check your work! ***/
// const onceFunc = once(addByTwo);
// console.log(onceFunc(4));  // => should log 6
// console.log(onceFunc(10));  // => should log 6
// console.log(onceFunc(9001));  // => should log 6

// CHALLENGE 1
function createFunction() {
	return function(){
    console.log('hello')
  }
}

// /*** Uncomment these to check your work! ***/
const function1 = createFunction();
//function1(); // => should console.log('hello');


// CHALLENGE 2
function createFunctionPrinter(input) {
  function printer(){
    console.log(input)
  }
  return printer;
}

// /*** Uncomment these to check your work! ***/
const printSample = createFunctionPrinter('sample');
//printSample(); // => should console.log('sample');
const printHello = createFunctionPrinter('hello');
//printHello(); // => should console.log('hello');


// CHALLENGE 3
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

//const willCounter = outer();
//const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
//willCounter();
//willCounter();
//willCounter();

//jasCounter();
//willCounter();


function addByX(x) {
	let step = x;
  function add(start){
    //console.log('addByX', start + step)
    return start + step;
  }
	return add;
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
addByTwo(1); // => should return 3
addByTwo(2); // => should return 4
addByTwo(3); // => should return 5

const addByThree = addByX(3);
addByThree(1); // => should return 4
addByThree(2); // => should return 5

const addByFour = addByX(4);
addByFour(4); // => should return 8
addByFour(5); // => should return 9


// CHALLENGE 4
function once(func) {
	let output;
  function callOnce(x) {    
    if(output > 0){
      return output;
    } else {
      output = func(x)
      return output;
    }
  }
  return callOnce;
}

// /*** Uncomment these to check your work! ***/
const onceFunc = once(addByTwo);
//console.log(onceFunc(4));  // => should log 6
//console.log(onceFunc(10));  // => should log 6
//console.log(onceFunc(9001));  // => should log 6


// CHALLENGE 5
function after(count, func) {
	let numCalls = 0
  function calledAfter() {
    numCalls++;
    if(numCalls == count) {
      func()
    }
  }
  
  return calledAfter
}

// /*** Uncomment these to check your work! ***/
const called = function() { console.log('hello') };
const afterCalled = after(3, called);
//afterCalled(); // => nothing is printed
//afterCalled(); // => nothing is printed
//afterCalled(); // => 'hello' is printed


// CHALLENGE 6
function delay(func, wait, ...params) {
	setTimeout(() => {
    func(...params)
  }, wait)
}

// Testing Challenge 6 (tests were not included in the exercise for this challenge)
const cb = function(...params){ console.log("called!", ...params) };
//delay(cb, 1000); // "called!" printed after 1000 ms
//delay(cb, 2000, "param1", "param2"); // "called! param1 param2" printed after 2000 ms


// CHALLENGE 7
function rollCall(names) {
	let roll = names
  function caller() {
    if(roll.length > 0) {
      console.log(roll.shift())
    } else {
      console.log("Everyone accounted for")
    }
  }
  
  return caller
}

// /*** Uncomment these to check your work! ***/
 const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
// rollCaller() // => should log 'Victoria'
// rollCaller() // => should log 'Juan'
// rollCaller() // => should log 'Ruth'
// rollCaller() // => should log 'Everyone accounted for'


// CHALLENGE 8
function saveOutput(func, magicWord) {
	let obj = {}
  
  function save(x) {
    if(x === magicWord){
    	return obj;  
    }
    else {
      obj[x] = func(x)
			return obj[x]
    }
    
  }
  
  return save;
}

// /*** Uncomment these to check your work! ***/
 const multiplyBy2 = function(num) { return num * 2; };
 const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
// console.log(multBy2AndLog(2)); // => should log 4
// console.log(multBy2AndLog(9)); // => should log 18
// console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }


// CHALLENGE 9
function cycleIterator(array) {
	let index = 0
  function iterate(){
    let output = array[index % array.length]
    index++
    return output
  }
  
  return iterate;
}

// /*** Uncomment these to check your work! ***/
 const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
 const getDay = cycleIterator(threeDayWeekend);
 //console.log(getDay()); // => should log 'Fri'
 //console.log(getDay()); // => should log 'Sat'
 //console.log(getDay()); // => should log 'Sun'
 //console.log(getDay()); // => should log 'Fri'


// CHALLENGE 10
function defineFirstArg(func, arg) {

  function firstArg(...params){
    return func(arg, ...params)
  }
  
  return firstArg;
}

// /*** Uncomment these to check your work! ***/
 const subtract = function(big, small) { return big - small; };
 const subFrom20 = defineFirstArg(subtract, 20);
 // console.log(subFrom20(5)); // => should log 15

