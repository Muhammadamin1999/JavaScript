const num1 = [[1],[2]];
const num2 = [2,[4]];
const num3 = 5;
num1[0].push(num3);
const result = num1.concat(num2);
console.log(result);