//challange 1
function createFunction(){
    return function(){console.log("hello")};
    
}

const function1 = createFunction();
function1();

// challange 2

function createFunctionPointer(input){
    return function(){
        console.log(input);
    }
}
const printSample = createFunctionPointer('sample');
printSample();
const printHello = createFunctionPointer('hello');
printHello();

// challange 3

function outer() {
    let counter = 0; // this variable is outside incrementCounter's scope
    function incrementCounter () {
      counter ++;
      console.log('counter', counter);
    }
    return incrementCounter;
  }
  
  const willCounter = outer();
  const jasCounter = outer();

  // Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
willCounter();
willCounter();
willCounter();
jasCounter();
willCounter();

function addByX(x) {
   let initial = x;
   return function(start){
    console.log(initial + start);
   }

   
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