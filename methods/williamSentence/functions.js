//challange 1

function addTwo(a){
    return a+2;
}
//challange 2
function addS(s){
    return s + "s";
}
//challange 3
function map(input, callback){
    let arr = [];
    for(let i = 0; i< input.length; i++){
        arr.push(callback(input[i]));
    }
    return arr;
}
map([1,2,3,4],addTwo);
// challange 4
function forEach(letters, callback){
     let arr = [];
     for(let i = 0; i< letters.length; i++){
        
     }
}
