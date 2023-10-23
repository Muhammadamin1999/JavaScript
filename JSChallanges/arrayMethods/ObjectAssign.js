
const obj = Object.create(
    {subject: 'javascript'},
    {
        lesson: {value:'Object Again'}
    }
);
console.log(obj)
const copy = Object.assign({},obj);
//console.log(copy);

// create method create new object
// using an existing obj as a prototype of the newly created obj

// Object.assign() method copies all enumerable own properties from one or more
// source objects to a target object. it returns the modified obj



