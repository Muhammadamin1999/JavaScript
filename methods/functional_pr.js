//pure function not pure function
// pure not take changeable params such as DOM
// not pure may not return or return totally different thing
// let n = 6
// console.log(iterticeFibonacci(n))
// function iterticeFibonacci(num){
//     let n1=0, n2=1;
//     let nextTerm = n1 + n2;
//     for(let i =3; i<= num; i++){
//         n1 = n2
//         n2 = nextTerm
//         nextTerm = n1+n2
//     }
//     return nextTerm

// }
// recuresive
// let n = 6
// console.log(recursiveFibonacci(n))
// function recursiveFibonacci(num){
//     if (num <= 1){
//             return 1
//     }else{
//            return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
//     }
// }

// using filter 
let arr = [2,3,4,5,6,7,8,15]
// let result = arr.filter(value=>{
//     return value % 2 === 0 ? value : 0
// })
// console.log(result)
// using map
let result = arr.map(value=>{
    if(value%3 === 0){
        arr[value] = "fuzz"
    }else if(value%5 === 0){
        arr[value] = "buzz"
    }else if(value%15 === 0){
        arr[value] = "fuzzbuzz"
    }else{
        return value
    }
})
console.log(result)

