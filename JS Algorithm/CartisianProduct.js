function CartisianProduct(arr1, arr2){
    const result = [];
    for(let i = 0; i<arr1.length; i++){
        
        for(let j=0; j<arr2.length; j++){
            result.push([arr1[i],arr2[j]]);
        }
    }

    return result;
}

console.log(CartisianProduct([1,2],[3,4]));
// Big O(n*m) it depends the length of different sized arrays