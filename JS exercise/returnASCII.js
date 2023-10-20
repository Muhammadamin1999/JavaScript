// return AscII
function getChar(c){
    return String.fromCharCode(c);
}
console.log(getChar(56))

// 

function seatsInTheater(nCols, nRows, col, row){
     return (nCols - col + 1) * (nRows - row);
}

console.log(seatsInTheater(16,11,5,3));

// 

function points(games){
    return games.reduce((acc, game)=>
    {
        const [x,y] = game.split(':');
        const points = x > y ? 3 : x === y ? 1 : 0;
        acc +=points;
        return acc;
    },0)
}