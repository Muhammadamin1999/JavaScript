const arr = [1,2];
[a,b] = arr;
console.log(a);
console.log(b);
const obj = {a:1, b:2};
let {a:c, b: d} = obj;
console.log(c);
console.log(d);

// key shold be same
// we can swap arr using destructuring

const array = [1,2];

[array[0],array[1]] = [array[1],array[0]];
console.log(array);
//
let place = 'US';
let department = {[getStudentPlace()]: 'India',[place + "Department"]: 'English', standard: 100};
function getStudentPlace(){
    return place;
}
let division = "standard";
let {[getStudentPlace()]:placeDetails,[place + "Department"]: departmentDetails,
[division]: standard } = department;
console.log(placeDetails + '&' + departmentDetails + '&' + standard);

