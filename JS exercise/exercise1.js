// return if one of the numbers or sum of them are 100

// function ifHundered(a,b){
//     let sum = a + b;
//     if(sum < 100 || sum > 100){
//         return false
//     } else return true;
// }

// console.log(ifHundered(50,50))
const isEquesl100 = (a,b)=> a === 100 || b === 100 || a+b === 100;
console.log(isEquesl100(30,70))


/// exercise 2
// write a function to get the extension of the file

const getExtension = (str) => str.slice(str.lastIndexOf('.'))

console.log(getExtension('str.html'))

// exercise 3
// a programm that follows character after it is alphabet sequesnce

const moveCharsForward = (str)=> str.split('').map(char=> String.fromCharCode(char.charCodeAt(0)+1)).join('')
console.log(moveCharsForward('abc'));

// exercise 4 
// get a common date


const formatDate = (todayDate = new Date())=>{
    const days = todayDate.getDay() +1;
    const months = todayDate.getMonth()+1;
    const years = todayDate.getYear();
     return `${days}/${months}/${years}`;
}
console.log(formatDate());

// exercise 5
// add every string NEW! from beginnig if it has already new return itself
const addString = (str)=> str.startsWith("New!") === 0 ? str : `New! ${str}` ;
console.log(addString("Ofcourse"))
// you can do startsWith() and with regex and method .test
