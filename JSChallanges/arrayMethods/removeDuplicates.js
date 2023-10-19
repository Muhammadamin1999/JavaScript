const arr = [2,3,5,6,7,8,9,2,11,5];

const strArr = ['Mike', 'John', 'Nancy','Thomas','Nancy','Peter','Mike'];

// a value in Set only occurs once

const resultArr = [...new Set(arr)];
const strResultArr = [...new Set(strArr)];

console.log(resultArr);
console.log(strResultArr);

// ... spread operator to get each element individually;
