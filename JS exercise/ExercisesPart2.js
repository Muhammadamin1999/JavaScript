// exercise 1 

const addStr = (str)=> str.length >=3 ? str.slice(0,3) + str.slice(-3)  : str;

console.log(addStr("hello"));
// exercise 2

const firstHalf = (str)=> str.slice(0, str.length / 2);

console.log(firstHalf("hello"));

// exercise 3

const concatinate = (str1, str2)=> str1.split('').splice(1).join('') + str2.split('').splice(1).join('');
console.log(concatinate("hello", "world"));

// if you use slice(1) no need to use join or split

//exercie 4

const closetTo100 = (a,b)=> (100 - a) < (100 - b) ? a : b;

// exercise 5

const occurences = (str,char)=>
 str.split('').filter(ch => ch === char).length >=2 && 
 str.split('').filter(ch => ch === char).length <=4 ? true : false
 console.log(occurences("hellolloo", "l"));

