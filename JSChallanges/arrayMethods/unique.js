const arr = [1,2,3,4,5,3,2];

const result = arr.filter(el => arr.indexOf(el) === arr.lastIndexOf(el))
// 0 === 0 ok
// 1 === 1 ok but 1 === 6 no
// 2 === 2 ok but 2 === 5 no
// 3 === 3 ok 
// 4 === 4 ok


// const result = arr.reduce((acc,elem)=> {
//     if(!acc.includes(elem)){
//         acc.push(elem);
//     }
//     return acc
// },[])

// console.log(result);

// const resultWithFilter = arr.filter((value,index,self)=> self.indexOf(value) === index);
// console.log(resultWithFilter);