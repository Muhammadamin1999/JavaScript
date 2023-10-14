function binarySearch(arr, target){
    let leftIndex = 0;
    let rigthIndex = arr.length - 1;
   
    while(leftIndex <= rigthIndex){
        let middleIndex = Math.floor((leftIndex + rigthIndex)/2);
        if(arr[middleIndex]=== target){
            return middleIndex;
        }
        if(arr[middleIndex] > target){
            rigthIndex = middleIndex - 1; 
        }else{
            leftIndex = middleIndex +1 ;
        }
    }

}

const result = binarySearch([-5,-2,1,0,3,6,7,9,13,11],13)
console.log(result);

// big O(logn)