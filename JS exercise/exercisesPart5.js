// exercise 1
const sortedArr = (str) => str.split('').sort().join('')

console.log(sortedArr('deacb'));

// exercise 2

const countVowel = (str,letters = ['a','o','u','i','e']) => str.split('')
.filter(s=> letters.indexOf(s) > -1).length;

console.log(countVowel("hello world"));

// exercise 3

const convertToCoin = (num, coins=[25,10,5,2,1])=>{
    const arr=[]
    for(let i=0; i<coins.length; i++){
       let j= Math.floor(num/coins[i])
       if(j !== 0){
        for(let n=0; n<j; n++){
            arr.push(coins[i]);
           }
           num -= j * coins[i];
       }

    }
    return arr;

}

console.log(convertToCoin(46));

// exercise 4

const getUniqueChars = (str)=> str.split('').filter(
    (item, index, arr) => 
    arr.slice(index + 1).indexOf(item)=== -1
);
  

console.log(getUniqueChars("aaaabbbbccccc"))
const Unique = (str) => [...new Set(str.split(''))];
console.log(Unique('aabbccdd'));

// exercise 5

const getNonRepeated = (str) =>
str.split('').filter(
    (item,index,arr)=>( arr.filter((arrItem)=> arrItem === item)).length  ===1
);
console.log(getNonRepeated('mmnnb'));



