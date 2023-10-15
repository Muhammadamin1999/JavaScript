function fibonacciRecursive(num){
    if(num<2){
        return num
    }
    return fibonacciRecursive(num-1) + fibonacciRecursive(num -2)

}

const result = fibonacciRecursive(8);
console.log(result);

// big O - O(2^n)
