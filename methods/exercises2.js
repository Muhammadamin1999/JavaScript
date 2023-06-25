// Minimum
// const ans = (a,b)=>{
//   return  Math.min(a,b)
// }
// console.log(ans(5,6))

//recursive even or odd

// function isEven(a){
//     if(Math.abs(a) === 0){
//         return true
//     }else if(Math.abs(a) === 1){
//         return false
//     }
//     return isEven(Math.abs(a-2))
// }
// let ans = isEven(-1)
// console.log(ans)

// function countB(str,ch){
//     let counter = 0;
//     for(let i =0; i<=str.length-1; i++){
//         if(str[i]=== ch){
//             counter++;
//         }
//     };
//     return counter
// };
// function countB1(str){
//     return countB(str, "B")
// }
// let ans = countB1("BooBoooBBoob")
// console.log(ans)

// toUppercase
// let str = 'hello'
// const ans = str =>{
//     return str.toLoverCase().split(' ').map(word=>word[0].toUpperCase() + word.substr(1))
//     .join(' ')
// }
// console.log(ans)

// max number of char
// let str1 = "helloommm"
// function maxCharacter(str1){
//     const charMap = {}
//     let charMax = ''
//     let numMax = 0
//     str1.split('').forEach(function(char){
//         if(charMap[char]){
//             charMap[char]++
//         }else{
//             charMap[char]=1
//         }
//     })
//     for(let char in charMap){
//         if(charMap[char] > numMax){
//             numMax = charMap[char]
//             charMax = char
//         }
//     }
//     return charMax
// }
// const ans = maxCharacter(str1)
// console.log(ans)

//duplicate
// let str = "helloo"

// let ans = str.split('').filter((item,index)=> str.indexOf(item) !== index )
// console.log(ans)
// let str = 'Hello world my name is Hekle'
// let maxLength = 0
// let maxElem = ''
// let arr = str.split(' ')
// arr.filter( function(elem){
//    if(elem.length > maxLength){
//       maxLength = elem.length
//       maxElem = elem
//    }
// })
// console.log(maxElem)
  
function longestWord(sen){
    const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g)
    const sorted = wordArr.sort((a,b)=> b.length - a.length)
    const longestWordArr = sorted.filter((word)=>word.length === sorted[0].length)
    if(longestWordArr.length === 1){
        return longestWordArr[0]
    }else{
        return longestWordArr
    }
}
let sen = 'hello micha how are you doing'
const ans = longestWord(sen)
console.log(ans)