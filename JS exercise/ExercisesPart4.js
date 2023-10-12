//exercise 1 leap year
const leapYear = (year)=> year%4 === 0 ? true : false
console.log(leapYear(56));

// exercise 2 compare objects

const compareObj = (obj1, obj2) => {
    for (value in obj1 ){
         if(!obj2.hasOwnProperty(value)) return false
    }
    return true;
}
console.log(compareObj({a:1, b:2},{a:1, c:3}));

const objectsEqual = (obj1, obj2) => Object.keys(obj1).every(key=>obj2[key]);

// exercise 3

const create2DArray = (arr) => arr.split('\n').map(row=> row.split(','))

console.log(create2DArray('a,b,c,d,e,f'))

// exercise 4

const createNum = ()=>{
    return Math.floor(Math.random()*16).toString(16); 
}
const createColor = ()=>{
    return '#' + Array.from({length: 6}).map(createNum).join('')
}
console.log(createColor())

// exercise 5 
const fun = (arr,callback)=>{
   for(let i=0; i< arr.length; i++){

    if(!callback(arr[i])){return false}else{
        return true;
    }
}
}

console.log(fun([1,2,3,4],(x)=> x > 3))

console.log([1,2,3,4].every(x=> x>0))