function fibonacci(n){
    const elems = [0,1];
    for(let i = 2; i<n; i++){
        elems[i]= elems[i-1] + elems[i-2];
    }
    return elems;
}
console.log(fibonacci(5))
// big O(n)
