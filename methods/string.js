// creating strings
//const str = 'string ex code bla bla'
//const str1 = new String('str2')
// str.length shows the length of strng
// string character acces , characters are 0 index based, first character is in index 0
// str.charAt(4) shu indexdagi characterni chiqaradi
// indexOf() and lastIndexOf()
//str.indexOf('code') bu holatda indexOf -> bu taragfga qarab qidiradi
//str.lastIndexOf('code) bu holatda <- bu tarafga qarab qidiradi
// str.indexOf('code', 4) 4 chi indexdan boshlab -> tarafga
// str.lastIndexOf('code', 10) 10 chi dan boshlab <- bu tarafga
// str.indexOf('code', -5) 0 elementdan boshlab
// str.lastindexOf('code', -5) -1 qaytaradi javob chiqarmidi

//str.slice(4)  4-indexdagidan -> qarab kesibberadi
//str.substring(4) 4-indexdan boshlidi -> oxirigaca kesib beradi
//str.split('a')  a ni olib tashlab qolgan hamma elementni bitta bitta bolib element qilib qoyadi
// ['string', 'ex', 'code' , 'bl', 'bl'] javob ciqadi
// str.includes('ex') true qaytaradi sabab ex bor
// str.includes('ex', 9) false chiqaradi
// str.startsWith('ex') false qaytaradi
//str.stratsWith('ex',8) true beradi
// endsWith()
// concat()
//const str = ' hello '
// const str2 = 'world'
// const newEl = str1.concat(str2)
// const newEls = str1.concat(' '. str2)
// repeat('el') nechta shunaqa element borligi
// str.trim() white space remove qilinadi
// str.trimStart() -> da whitespace qoshadi va str.trimEnd() <- bu yo'nalishda qo'shadi bor
//str.padStart and str.padEnd()  bular white space qo'shadi
//str1.localCompare('str2) 
// str.search(regexp)
//str.replace()
//str.replaceAll()
//str.charCodeAt()
//str.codePointAt()
 //str.toLocaleUpperCase()
// str.toString() somehow = str.valueOf()
// String.raw(strings, ...substitutions) 
// indexOf("element") doim arrayda kelgan birinchi element indexini chaqiradi
//lastIndexOf('element') bu oxirgi elementni indexini qaytaradi
// const persons = [
//     {
//         name: "Frank",
//         age: 16
//     },
//     {
//         name: "Sam",
//         age: 14
//     },
//     {
//         name: "Bob",
//         age: 20
//     }
// ]


// function isAdult(person){
//     return person.age >=16
// }

// const result = persons.every(isAdult)
// console.log(result)
// const names = ["florin", "ivan", "liam"]
// const res = names.find(findIvan)
// function findIvan(item){
//     return item === 'ivan'
// }
const a = "this is string"
console.log(typeof(a))
const b = String("i am also string")
console.log(typeof(b))
const c = new String("hello")
console.log(typeof(c))

console.log(a.charAt(5))
console.log(a.at(5))
console.log(a.charCodeAt(5))
console.log(a.codePointAt(5))
console.log(a.concat(" ",b))
const d = ["hello", " World", " this is ", " me "]
console.log("".concat(...d))
console.log(" muhammad amin js ")
console.log(" muhammad amin js ".split(' '))
const e = " muhammad amin js ".split(' ')


