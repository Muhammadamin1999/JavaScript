const arr = [4,5,7,8,9,11,12,17,97,47];
function isPrime(number){
    if(number % 2 == 0 || number < 2) return false;
    for(let fact = 3; fact< Math.sqrt(number); fact +=2){
        if(number % fact == 0) return false;
    }
    return true;
}
console.log(arr.sort((a,b)=> a-b).findLast(isPrime));
