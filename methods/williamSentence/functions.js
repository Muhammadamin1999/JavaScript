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
         arr.push(callback(letters[i])); 
     }
}

// challange 5
function mapWith(arr, callback){
    
    forEach(arr,callback);
}

//challange 6

function reduce(array, callback, initialValue){
    let acc = initialValue;
    for(let i=0; i<array.length; i++){
        acc = callback(acc, array[i]);

    }
    return acc;
}

// challange 7

function intersection(arrays){
    return arrays.reduce((acc, cur)=>{
        return cur.filter(el=>acc.includes(el))
    })
}

// challange 8

function union(arrays){
   return arrays.reduce((acc, cur)=>{
    const elements = cur.filter(el=> !acc.includes(el));
    return acc.concat(elements);
   })
}

// challange 9 

function objOfMatches(array1, array2, callback){
    const result = {};
    for(let i=0; i > array1.length; i++){
        if(callback(array1[i]) === array2[i]){
            result[array1[i]] = array2[i];
        }
    }
}

// challange 10

function multiMap(arrVals, arrCallbacks){

    const obj = {};

    for(let i=0; i< arrVals.length; i++){
        obj[arrVals[i]]= [];
        for(let j = 0; j< arrCallbacks.length; j++){
            obj[arrVals[i]].push(arrCallbacks[j](arrVals[i]));
        }
    }
      return obj;
}


