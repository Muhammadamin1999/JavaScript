
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
// let n = 5
// let start = 1
// for(let i=0; i<n; i++){
//     var arr = []
//    if(i%2 === 0) start = 1
//    else start = 0
//    for(let j=0; j<=i; j++)
//    {
//       arr += start
//       start = 1-start
//    }
//    console.log(arr)
// }
// let n = 4
// let space = 2*(n-1)

// for(let i=1; i <= n; i++){
//     var arr = []
// for(let j=1; j<=i; j++)
// {
//     arr +=j
// }
// for( let k =1; k<=space; k++){
//     arr+=' '
// }

// for(let j=i; j>0; j--)
// {
//     arr +=j
// }

// console.log(arr)
// space -=2
// }
// let n=5
// let num =1
// for(let i=1; i<=n ; i++){
//     var arr = []
//     for(let j=1; j<=i; j++){
//         arr += num
//         num++
//     }
//     console.log(arr)
// }
// let n = 5

// for(let i =1; i<=n; i++){
//     var arr = []
//     for(let j= 1; j<= i; j++){
//         let res = `0x00${40 + j}`
//         arr += String.fromCodePoint(res)
//     }
//     console.log(arr)
// }
// let n=5

// for(let i =n; i<= n; i--){
//     var arr= []
//     for(let j=i; j>0; j--){
//         let res = `0x00${46 - j}`
//         arr += String.fromCodePoint(res)
        
//     }
//     console.log(arr)
// }
// let n=5

// for(let i =1; i<= n; i++){
//     var arr= []
//     for(let j=i; j>=0; j--){
//         let res = `0x00${40 + i}`
//         arr += String.fromCodePoint(res)
//     }
//     console.log(arr)
// }
// let n=5
// for(let i=0; i<n; i++){
//     var arr=[]
//     var change = 0

//     let breakponint = Math.ceil((2*i+1)/2)
//     for(let j=0; j<n-i-1; j++){
//         arr += ' '
        
//     }
//     for(let k=1; k<= 2*i +1; k++){
//         if( k<= breakponint) change++
//         else change --
//         let res = '0x00' + (40 + change)
        
//         arr+= String.fromCodePoint(res)
        
//     }

//     for(let j=0; j<n-i-1; j++){
//         arr += ' '
        
//     }
//     console.log(arr)
// }
