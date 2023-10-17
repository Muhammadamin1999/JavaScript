// decorators wrap a function in another function 
// these wrappers 'decorate' the original function with new capabilities

// the concept of the decorators is not exclusive to js

// benefits: d.r.y(do not repeat yourself) and clean code through composition

//example 1
// with decorators we use let cause we should rename it

let sum = (...args)=>{
    return [...args].reduce((acc,num)=> acc + num);

}

const callCounter = (fn)=>{
    let count = 0;
    
    return (...args)=>{
        // write to logs, console, db, etc
        console.log(`sum has been called ${count +=1} times`);
        return fn(...args);
    }
}

sum = callCounter(sum);
console.log(sum(2,3,5));
console.log(sum(1,5));
console.log(sum(14,5));

// example 2
// check for valid data and number of params

let rectangleArea = (length, width)=>{
    return length * width;
}

const countParams = (fn)=>{
    return (...params)=>{
        if(params.length !== fn.length){
            throw new Error(`Incorrect number of params for ${fn.name}`);
        };
        return fn(...params);
    }

}

const requireIntegers = (fn)=>{
    const name = fn.name;
    return (name, ...params)=>{
        params.forEach(param=>{
        if(!Number.isInteger(param)){
            throw new TypeError(`Params for $${name} must be integres`);
        }
    });
    return fn(...params);
    }
}

rectangleArea = countParams(rectangleArea);
rectangleArea = requireIntegers(rectangleArea);
console.log(rectangleArea(20,30));
console.log(rectangleArea(20, "hey"));

// example 3

// decorating an async API call function
// time data requests during development

let requestData = async (url)=>{
    try{
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }catch(err){
        console.log(err);
    }
}
const dataResponseTime = (fn)=> {
    return async (url)=>{
        console.time('fn');
        const data = await fn(url);
        console.timeEnd('fn');
        return data;
    }

}

const myTestFunction = async()=>{
    requestData = dataResponseTime(requestData);
    const data = await requestData('https://jsonplaceholder.typicode.com/posts');
    console.log(data);
}
myTestFunction();