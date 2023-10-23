// Object.is() method determines whether two values are the same value
// a boolean indicating whether or not the two arguments are the same value

// Object.is() not equal to == operator or ===

console.log(Object.is(undefined,undefined)); //true
console.log(Object.is('test','test'));// true
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is({a:1},{a:1})); // false value may be same but memory address not same

