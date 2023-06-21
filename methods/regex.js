// there are  two ways to create
//1
// const pattern = /[a-zA-Z] + ing$/
// // 2 
// const pattern2 = new RegExp('[a-zA-Z] + ing$')

// const language = 'JS'
// const pattern = new RegExp(language)
// console.log(pattern.test("JS is good")) // true cause there is JS
// // there is also exec() it shows index
// console.log(pattern.exec("JS is good")) //[ 'JS', index: 0, input: 'JS is good', groups: undefined ]

// from first to last
const vowels = /[aeiou]/
const letters = /[A-Z]/ // all capital letters
const num = /[0-9]]/
// negative sign ^
const neg = /[^A-Z]/
// properties
// g makes it global
// i ignores if it is J or j let's say
// m multiline
const pattern = /java/i
console.log(pattern.test('Javascript')) // true whithout i it is false

// speacial characters
// . matches any character except line breeaks
// \w matches any word like /[A-Za-Z0-9_]/
// \W matches any non word character like /[^A-Za-z0-9_]/
// \d digit character [0-9]
// \D non digit character [^0-9]
// \s is equalent to [ \t\r\n\f]
// \S is equalent to [ ^\t\r\n\f]

// modifiers
// ? makes optional
// * matches one or more occurance 
// + matches one or more occurance
//{n} matches at least n occurance
//{,m} matches at most m occurance
//{n,m} matches at least n and at most m occurance
// ^ marks the position before the first char
// $ marks the position after the last char


