function linearSearch(arr, target){
    for(let i=0; i< arr.length; i++){
        if(arr[i] == target) return i;
    } return -1;

}

const result = linearSearch([1,2,3,4,5,6,7],5);
console.log(result)
// big O(n)
