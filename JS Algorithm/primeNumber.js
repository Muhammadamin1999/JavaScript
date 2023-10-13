function Prime(n){
    if(n<2){
        return false;
    }
    for(let i = 2; i<= Math.sqrt(n); i++){
        if(n%i === 0){
            return "is Not Prime"
        }  
    }
    return "is Prime"
}
console.log(Prime(8))

// big O - O(n)