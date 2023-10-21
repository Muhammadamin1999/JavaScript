const arr = Array(2).fill({});
arr[0].product = 'laptop';
arr[1].type = "mac"
console.log(arr);
// [
//   { product: 'laptop', type: 'mac' },
//   { product: 'laptop', type: 'mac' }
// ]