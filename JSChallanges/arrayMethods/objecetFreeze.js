'use strict'
const obj = {
    name: {}
};
Object.freeze(obj);
obj.name.firstName = 'Test';
console.log(obj.name.firstName);

// freezes obj, we can't change property
// we can't add or remove property
