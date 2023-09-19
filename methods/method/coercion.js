const arr = [1,1,4,1,2,3,5,0,6]
let x = 5
//5


function findNum(arr, x){
    let result = 0
    let count = 0
    // for(let i = 0; i< arr.length; i++){
        
    //  for(let j = i+1; j<arr.length; j++){
    //     if((arr[i]+arr[j])== x){
    //         result++
             
    //     }
    //  }
     

    // }

    result = arr.filter(elem => elem <=x)
    
    let i = 0
    let j = result.length 
    for(i; i<result.length;)


    // for(let i = 0; i< result.length; i++){
    //     let z = x - arr[i]
    //     if(z == result[i]){
    //         result.pop(result[i])
    //         count++
    //     }
    // }
    // result.forEach((elem,ind,arr) => {
    //     let sub = x - elem
    //     arr[ind] = result.filter(el => el == sub)
    // });
    // console.log(result.flat(2))
}
findNum(arr,x)
//console.log(findNum(arr,x))