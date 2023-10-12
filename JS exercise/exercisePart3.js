// // exercise 1

// const countEvenNumbers = (arr) => arr.filter(elem => elem%2 !== 1).length;
// console.log(countEvenNumbers([1,2,3,4,6,7,8,10]));

// // exercise 2 

// const numberOfEven = (num)=> Math.floor(num/2);

// const CreateArray = (num)=> {
//     const returnArray = [];
//     for(let i = 0; i<= num; i++){
//         returnArray.push(i);
//     }
//     return returnArray;
// }

// // exercise 3
// const isAscended = (arr)=>{
//     for(let i = 0 ; i< arr.length; i++){
//         if(arr[i+1] < arr[i]) return false
//     }
//     return true;
// }
// console.log(isAscended([6,5,4,3]))

// // exercise 4

// const largestEvenNum = (arr)=> Math.max(...arr.filter(num=> num % 2 === 0))

// console.log(largestEvenNum([2,4,5,7,6,8,10]));

// exercise 5

const replaceChar = (str)=> {
   let characters =  str.split('');
   characters[0] = '$';
   return characters.join('')
}

console.log(replaceChar("Hello"));

const replaceFirstDigit= (str) => 
   str.replace(/[0-9]/, '$');


console.log(replaceFirstDigit('Abc0erw'));