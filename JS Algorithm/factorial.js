function factorial(n){
    let sum = 1;
     if(n===0 || n===1) return 1;
    for(let i=2; i<=n; i++){
        sum *=i;
    }
    return sum;
}

console.log(factorial(5));
// big O is O(n) 
