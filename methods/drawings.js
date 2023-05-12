
// for(let i = 0; i < 5; i++)
// {
//     var arr = []
//     for(let j = 0; j < 4; j++)
//     {
//         arr += '*'
//     }
//     console.log(arr)
// }

// for(let i=0; i<5; i++){
//     var arr=[]
//     for(let j=0; j <=i; j++){
//        arr += '*'
//     }
//     console.log(arr)

// }
// for(let i=1; i<=5; i++){
//     var arr=[]
//     for(let j=1; j<=i;j++)
//     {
//         arr += j
//     }
//     console.log(arr)
// }

// for(let i=1; i<=5;i++){
//     var arr=[]
//     for(let j=1; j<=i; j++){
//         arr += i
//     }
//     console.log(arr)
// }
// for(let i = 5; i>0; i--){
//     var arr=[]
//     for(let j=i; j>0; j--)
//     {
//       arr+=i
//     }
//     console.log(arr)
// }

// for(let i = 5; i>0; i--){
//     var arr=[]
//     let counter = 0

//     for(let j=i; j>0; j--)
//     {
        
//         counter++
//       arr+= counter
//     }
//     console.log(arr)
// }
// let n =5
// for(let i = 0; i < n; i++){
//     var arr=[]

//  for(let j = 0; j< n-i; j++){

//     arr +=' '
//  }
 
//  for(let k=0; k< 2*i-1;k++){
//     arr += "*"
//  }
//  console.log(arr)
// }
// let n =5 
// for(let i = 0; i< n; i++)
// {
//     var arr = []
//     for( let j = 0; j < n-i; j++){
//         arr += ' '
//     }
//     for(let k=0; k< 2*i -1; k++){
//         arr += (k+1)
//     }
//     console.log(arr)
// }

// let n =5
// for(let i =n; i>0; i--){
//     var arr=[]
//     for(let j =0; j< n-i; j++){
//         arr +=' '
//     }
//     for(let k =0; k< 2*i-1; k++){
//         arr +='*'
//     }
//     console.log(arr)
// }
// let n = 5
// for(let i=0; i<= n; i++){
//     var arr=[]
//     for(let j = 0; j< n-i; j++){
//         arr += ' '
//     }
//     for(let k =0; k< 2*i -1; k++){
//         arr += '*'
//     }
//     console.log(arr)
// }

// let m=5
// for(let i=m; i>0; i--){
//     var arr2 =[]
//     for(let j = 0; j< m-i; j++){
//         arr2+= ' '
//     }
//     for(let k =0; k< 2*i - 1; k++){
//         arr2 += "*"
//     }
//     console.log(arr2)
// }
//let n=5
// for(let i=0; i< n; i++){
//     var arr=[]
//     for(let j=0; j<=i; j++){
//       arr += '*'
//     }
// let m = 5
//     for(let k= m-1; k > 0;k--)
//     {
//         arr+= '*'
//     }
//     console.log(arr)
// }
// let n=5
// for(let i =0; i< 2*n-1; i++){
//     let stars = i
//     var arr = []
//     if(i > n) stars = 2*n - i
//     for(let j=1; j<stars; j++){
//         arr += '*'
//     }
//     console.log(arr)
// }
let n = 5
let start = 1
for(let i=0; i<n; i++){
    var arr = []
   if(i%2 === 0) start = 1
   else start = 0
   for(let j=0; j<=i; j++)
   {
      arr += start
      start = 1-start
   }
   console.log(arr)
}