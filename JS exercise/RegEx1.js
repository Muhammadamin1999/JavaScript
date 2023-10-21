const ex1 = 'The quick brown fox jumped over the lazy dog';
const ex2 = 'A1B2C3D4E5F6G7H8I9J10';
const ex3 = 'The salad costs $9.99';
const ex4 = 'Contact customer support on 0800 300 500';
const ex5 = 'You can contact me on Twitter @codebubb or james@juniordevelopercentral.com';

// Exercise 01
// Using a regex pattern, get the 3 letter words in the ex1 string.
let reg = /(^|\s)[a-zA-Z]{3}($|\s)/g 
console.log(ex1.match(reg))

// Exercise 02
// Using a regex pattern, remove all of the numbers from the ex2 string.
console.log(ex2.replace(/[0-9]/g,''))

// Exercise 03
// Using a regex pattern, find the monetary value contained within the ex3 string.
console.log(ex3.match(/\$\d{1,3}.\d\d/)[0]);


// Exercise 04
// Using a regex pattern, find the telephone number contained within the ex4 string.
console.log(ex4.match(/(\d{3,4}\s?){3}/g))

// Exercise 05
// Using a regex pattern, find the email address contained within the ex5 string.
console.log(ex5.match(/\S+@\S+\.\S+/g)[0])

