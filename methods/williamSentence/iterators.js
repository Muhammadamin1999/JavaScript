// challange 1

//A

// function iteratorFunction(arr){
//     let sum = 0;
//    for(let i=0; i < arr.length; i++ ){
//       sum += arr[i];
//    }
//    return sum;
// }

// const arr = [1,2,3,4];
// const ans = iteratorFunction(arr);

// console.log(ans)

// // B
// const array = [1,2,3,4];
// function EachElem(arr){
//     let count = 0;
//     return function(){
//         count++;
//         return arr[count-1];
//     }
// }

// const myIterator = EachElem(array)
// console.log(myIterator());
// console.log(myIterator());

// challange 2

// function nextIterator(arr){
//    let count = 0;
//    const iterator = {
//     next: function(){
          
//           let value = arr[count];
//           count++;
//           return value;
//     }
    
//    }
//    return iterator;
// }

// const array3 = [1,2,3];
// const iteratorWithNext = nextIterator(array3);
// console.log(iteratorWithNext.next());

// challange 3

// function sumArray(arr){
//    let accumlator = 0;
//    let iterator = nextIterator(arr);
//    let next = iterator.next();
//    while(next){
//     accumlator += next;
//     next = iterator.next();
//    }
//    return accumlator;

// }

// const array4 = [1,2,3,4];
// console.log(sumArray(array4));

// challange 4
// function setIterator(set){
//     let setIterator = set.values();
//     const iterator = {
//         next: function(){
//             var next = setIterator.next();
//             return next['value'];
//         }

//     }
//     return iterator;
// }

// challange 5

function indexIterator(arr){
   let index = 0;
   const iterator = {
    next: function(){
        const value = arr[value];
        index++;
        return [index-1, value];
    }
   }
   return iterator;
}


