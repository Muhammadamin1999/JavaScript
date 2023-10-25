// ex1 return sum

const sum =(a=0,b=0)=> a+b;
console.log(sum(3,4));

// ex 2  return first elem of array

const first = (arr)=> arr[0];
console.log(first([2,3,4,5]));

// ex 3 convert minutes to seconds

const seconds = (minute)=> minute*60;
console.log(seconds(4));

// ex 4

const result1 = (arr)=> arr.map(el=> el+1);
console.log(result1([1,2,3,4]));

// ex 5 sum

function sumUp(num){
    let sum = 0;
    for(let i=1; i<=num; i++){
        sum +=i;
    }
    return sum;
}

console.log(sumUp(4));

// ex 6 use reduce
const result2 = new Array(4).fill(0).reduce((acc,item, index)=> acc + (index+1),0)
console.log(result2);

// ex 7

const result3 =(num)=> 11 + (num - 2)*5;
console.log(result3(1));
console.log(result3(4));
console.log(result3(87));

// ex 8
let n=5
 console.log(n.toString(2)) // 101 return in binarys

 const result4 = num => num.toString(2).padStart(8,'0');
 function bitwise(n1,n2){
    const n1BBits = result4(n1);
    const n2BBits = result4(n2);

    const res=[];
    for(let i=0; i<n1BBits.length; i+=1){
        res[i]= (n1BBits[i]==='1' && n2BBits[i]==='1') ? '1' : '0';
    }
    return parseInt(res.join(''),2);

 }
 