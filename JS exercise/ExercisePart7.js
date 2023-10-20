function guessGame(blueStart, redStart, bluePulled, redPulled){
    const numberOfBlue = blueStart - bluePulled;
    const numberOfRed = redStart - redPulled;

    return numberOfBlue/(numberOfBlue+numberOfRed);

}
//
function firstNonConsecutive(arr){
    for(let i = 1; i<arr.length; i++){
        if(arr[i-1]!==arr[i]) return arr[i]
    }
    return null;
}

// 
const zeroFull = (distanceToPass, mpg, fuelLeft)=> distanceToPass <= mpg*fuelLeft;