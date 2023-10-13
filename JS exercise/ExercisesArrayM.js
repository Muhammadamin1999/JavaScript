const people = [
    { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
    { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
    { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
    { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
    { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
    { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
    { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
    { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
    { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
    { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
    { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
    { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '39000' },
];
//exercise 1
// const AverageIncome = (arr) => arr.reduce((accum, elem)=>
//   accum + parseInt(elem.salary),0) / people.length;


// console.log(AverageIncome(people));

//exercise 2
// const OlderThan30 = (arr) => arr.filter(person => new Date().getFullYear() - new Date(person.DOB).getFullYear() > 30);
// console.log(OlderThan30(people));

// exercise 3

// const ListOfNameAndSurname = (arr) => arr.map(person => person.firstName +' '+ person.lastName);
// console.log(ListOfNameAndSurname(people));

// exercise 4

// const sortPeople = (arr)=> arr.sort((person1, person2) =>
// new Date(person1.DOB).getYear() - new Date().getYear(person2.DOB));

// console.log(sortPeople(people));

// exercise 5

const NumOfPeople = (arr) => arr.reduce((accum,elem)=> ({...accum, [elem.department]:accum[elem.department] + 1 || 1}),{})
console.log(NumOfPeople(people));
