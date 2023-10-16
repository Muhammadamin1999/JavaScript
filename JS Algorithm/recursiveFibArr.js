const fibonacci = (num, array=[0,1])=>{
while(num >2){
    const [nextToLast, last ]= array.slice(-2);
    array.push(nextToLast + last);
    num -=1;
}
return array;
}
const result = fibonacci(12);
console.log(result);

// with recursion

const fib = (num, array=[0,1])=>{
    if(num<=2) return array;
    const [nextToLast, last]= array.slice(-2);
    return fib(num-1, [...array, nextToLast + last]);
}
console.log(fib(12))

// without recursion index of the num

const fibonacciPos=(pos)=>{
    if(pos <= 1) return pos;
    const seq = [0,1];
    for(let i = 2; i <= pos; i++){
        const [nextToLast, last] = seq.slice(-2);
        seq.push(nextToLast + last);
    }
    return seq[pos];
}
console.log(fibonacciPos(8));

// with recursion

const fibonacciRecPos = (pos)=>{
    if(pos < 2) return pos;
    return fibonacciRecPos(pos - 1) + fibonacciRecPos(pos - 2);
}

console.log(fibonacciRecPos(8));

// another

const fibPos = pos => pos < 2 ? pos : fibPos(pos-1) + fibPos(pos-2);

console.log(fibPos(8));

