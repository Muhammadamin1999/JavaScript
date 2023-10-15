function bubbleSort(arr){
     let swapped
     do{
        swapped=false;
    for(let i=0; i < arr.length -1; i++){
        if(arr[i]> arr[i+1]){
            let temp = arr[i];
            arr[i]=arr[i+1];
            arr[i+1]= temp;
            swapped = true
        }
    }

     }while(swapped)
}
const arr= [-6,5,3,7,5,2,8]
const result = bubbleSort(arr);
console.log(arr);

// big O(n^2) cause two loops inside loop is loop
