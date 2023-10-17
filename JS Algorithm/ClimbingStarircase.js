function StairCase(num){
    const numOfWays = [1,2];
    for(let i=2; i <= num; i++){
        numOfWays[i] = numOfWays[i-1] + numOfWays[i-2];
    }
   return numOfWays[num-1]
}
console.log(StairCase(4));
