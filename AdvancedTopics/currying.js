// currying takes a function that receives more than one parameter
// and breaks it into a series of unary (one parameter) function

// therefore a curried function only takes one parameter at a time

// currying can look like that

// const buildSandwich = (ingredient1) =>{
//     return (ingredient2)=>{
//         return (ingredient3)=>{
//             return `${ingredient1},${ingredient2},${ingredient3}`;
//         }
//     }
// }

// const mySandwich = buildSandwich('Bacon')('Lettuce')('Tomato');
// console.log(mySandwich);

// // it workd but thats getting ugly and nested the further we go

// // let's refactor

// const buildSammy = ingred1=> ingred2=> ingred3=>
// `${ingred1},${ingred2}, ${ingred3}`;

// const mySammy = buildSammy('turkey')('cheese')('bread');

// console.log(mySammy);

// // another example of currying

// const multiply = (x,y)=> x * y;
// const curriedMultiply = x => y => x * y;

// console.log(multiply(2,3)); // 6
// console.log(curriedMultiply(2)); // [Function (anonymous)]
// console.log(curriedMultiply(2)(3)); // 6

// // partially applied functions are common use of currying
// const timesten = curriedMultiply(10);
// console.log(timesten); // [Function (anonymous)]
// console.log(timesten(8)); // 80

// another example
// const updateElemText = id => content => document.querySelector(`#${id}`).
// textContent= content;
// const updateHeaderText = updateElemText('header');
// updateHeaderText("hello dave");

// function composition

// const addCustomer = fn => (...args)=>{
//     console.log('saving info ...');
//     return fn(...args);
// }

// const processOrder = fn =>(...args)=>{
//     console.log(`processing order #${args[0]}`);
//     return fn(...args);
// }

// let completeOrder = (...args)=>{
//     console.log(`Order #${[...args].toString()} completed`);
// }

// completeOrder = (processOrder(completeOrder));
// console.log(completeOrder);
// completeOrder = (addCustomer(completeOrder));
// completeOrder("1000");

// requires a function with a fixed number of parameters

const curry = (fn)=>{
    return curried = (...args)=>{
        if(fn.length !== args.length){
            console.log(...args);
            return curried.bind(null, ...args); // bind creadtes new function

        }
        return fn(...args);
    };
}

const total = (x,y,z)=> x+y+z;

const curriedTotal = curry(total);
console.log(curriedTotal(10)(20)(30));
