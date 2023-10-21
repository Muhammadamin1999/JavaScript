// mutable vs Immutable

// primitives are immutable

let myName = "Dave";
myName[0] = "V";
// it does not change to Save cause it is not mutable

//impure function that mutates data

const addtoScoreHistory = (array, score)=>{
    array.push(score);
    return array;
}
const scoreArray = [44,12,23];
console.log(addtoScoreHistory(scoreArray,14));

// shallow copy vs deep copy
const yArray = [9,2,3,4];
const zArray = [...yArray,10];
console.log(zArray);
console.log(yArray);
// they are not same we made shallow copy using spread operator ...

// with Object.assign()

const tArray = Object.assign([],zArray);
console.log(tArray);
// but tArray is not equal to zArray cause they address are not same
// Array.from() and slice() create shallow cpies too

// when it comes to objs what about ...Object.freeze()

const scoreObj = {
    "first": 44,
    "second": 12,
    "third": {"a":1, "b":2}
}

Object.freeze(scoreObj);
scoreObj.third.a = 8;
console.log(scoreObj);
// still mutates

// not to mutate we use deep copy

// Deep copy is needed to avoid this
// several libraries like lodash, Ramda, and others
// have this feature built-in

/*
here is one line Vanilla JS solution, but it does not work with Dates, functions , undefined
Infinity, RegExp, Map, Set, Blobs, FileLists, imageDatas, and other complex types

*/

const newScoreObj = JSON.parse(JSON.stringify(scoreObj));
console.log(newScoreObj)
console.log(newScoreObj === scoreObj);

/* In JavaScript, when you work with objects and arrays, you need to be aware of the
 concepts of deep copy and shallow copy. These terms refer to how data is duplicated 
 when you want to create a copy of an object or an array.

**Shallow Copy:**

A shallow copy of an object or array is a new object or array that is a copy of the original,
 but it doesn't duplicate nested objects or arrays within the original. In other words,
  the new copy shares references to the same nested objects as the original. Changes made to nested objects
   in a shallow copy will affect the original and vice versa.

Here's an example of a shallow copy:

```javascript
// Original object
const originalObject = {
    name: "John",
    address: {
        city: "New York",
        state: "NY"
    }
};

// Create a shallow copy using the spread operator
const shallowCopy = { ...originalObject };

// Modify a property in the shallow copy
shallowCopy.name = "Alice";

// Modify a nested property in the shallow copy
shallowCopy.address.city = "Los Angeles";

console.log(originalObject.name); // Output: "John" (unchanged)
console.log(originalObject.address.city); // Output: "Los Angeles" (changed)
```

As you can see, changes to the `name` property of the shallow copy do not affect the original,
 but changes to the nested `address.city` property do.

**Deep Copy:**

A deep copy of an object or array creates a completely independent copy, including all nested objects 
and arrays. Changes to the original do not affect the deep copy, and vice versa.

Deep copying can be a bit more complex to implement, especially for objects with nested structures.
 One way to achieve a deep copy is by using the `JSON.parse()` and `JSON.stringify()` methods,
  which convert the object to a JSON string and then parse it back into a new object. Here's an example:

```javascript
// Original object
const originalObject = {
    name: "John",
    address: {
        city: "New York",
        state: "NY"
    }
};

// Create a deep copy using JSON methods
const deepCopy = JSON.parse(JSON.stringify(originalObject));

// Modify a property in the deep copy
deepCopy.name = "Alice";

// Modify a nested property in the deep copy
deepCopy.address.city = "Los Angeles";

console.log(originalObject.name); // Output: "John" (unchanged)
console.log(originalObject.address.city); // Output: "New York" (unchanged)
```

In this example, changes made to the deep copy do not affect the original or its nested objects.

Keep in mind that deep copying can be less efficient than shallow copying, especially for large and 
complex data structures, as it involves the serialization and deserialization of the entire object 
or array. Additionally, not all objects can be deep-copied using this method (e.g., objects with 
functions or circular references). In such cases, you might need to use a custom deep copy algorithm. */
