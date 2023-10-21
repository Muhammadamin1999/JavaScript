// array.from() lets you create Arrays from

// iterable objects (objects such as map and set)
// or if the obj is not iterable

// array-like obj (objects with length property and indexed elements)

const strFrom = Array.from('testform');
console.log(strFrom);

const arrFrom = Array.from([1,2,3],x=> x+x);
console.log(arrFrom);

const result = Array.from({length: 10},(v,i)=>{
    return i
})
console.log(result)