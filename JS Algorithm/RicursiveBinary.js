function binaryrecursive(arr,target){

    return search(arr,target, 0, arr.length-1);

}

function search(arr,target, leftIndex,rigthIndex){
    if(leftIndex > rigthIndex) return -1;
    let middleIndex = Math.floor((leftIndex+rigthIndex)/2);
    
    if(target === arr[middleIndex]) return middleIndex;

    if(arr[middleIndex] > target){
       return search(arr,target,leftIndex,rigthIndex - 1)
    }else{
       return search(arr,target,leftIndex+1, rigthIndex);
    }
        
    
}
const result = binaryrecursive([1,2,3,4,6,8,9,12,14,16],9)
console.log(result);
