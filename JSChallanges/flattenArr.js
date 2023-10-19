let arr=[[0,1],[3,4],[5,6]];
const flattenArr = arr.reduce((previous,curremt)=>
previous.concat(curremt),[]
)
console.log(flattenArr)