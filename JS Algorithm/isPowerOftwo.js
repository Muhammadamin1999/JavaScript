function ispowerOfTwo(n){
    // if(n<1){
    //     return false;
    // }
    // while(n>1){
    //    if(n %2 !== 0){
    //     return false;
    //    }
    //    n = n/2;
    // }
    // return true; // big O - O(logn)
    if(n<1){
        return false;
    }
    return (n&(n-1)) === 0 
    // big O - O(1)

}
console.log(ispowerOfTwo(6))