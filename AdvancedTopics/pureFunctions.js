// clean code
// easy to test
// easy to debug
// decoupled and independent
// could be added to your utility functions

// rule 1 the same input always gives the same output

const add = (x,y) => x + y;
console.log(add(2,3));

const fullName = (first, last)=> `${first} ${last}`;
console.log(fullName("dave", "gray"));
/// they are predictable
// we can replace the function with the output

// a pure function has at least one parameter
// can only work with their input

const firstName=()=> 'Dave';

// no side effects
// the impure function

const z = 5;
const sum = (x,y)=> x + y +z;
console.log(sum(2,2)); // 9

// pure function can't access to database, API, file system, storage, etc..
// can't modify DOM
// can't log to the console

// further no input state can be modified
// no data should be 'mutated'
// consider all input data to be immutable

// impure example // cause x is modified here 
let x=1;
const increment = ()=> x+=1;
console.log(increment());
console.log(x);

// impure example 2

const myArray = [1,2,3];
const addToArray = (array, data)=>{
    array.push(data);
    return array;
}
console.log(addToArray(myArray,4));
console.log(myArray);

// example 1 impure to pure , the value of x is not changing

const pureIncrement = (num)=> num += 1;
console.log(pureIncrement(x));
console.log(x);

// example 2
const pureAddToArray = (array, data)=>[...array, data];
console.log(pureAddToArray(myArray,5));
console.log(myArray);

// array is not changed

