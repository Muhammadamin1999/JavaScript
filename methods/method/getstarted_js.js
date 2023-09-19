// typeof 42;                  // "number"
// typeof "abc";               // "string"
// typeof true;                // "boolean"
// typeof undefined;           // "undefined"
// typeof null;                // "object" -- oops, bug!
// typeof { "a": 1 };          // "object"
// typeof [1,2,3];             // "object"
// typeof function hello(){};  // "function"

// console.log([ 1, 2, 3 ] === [ 1, 2, 3 ]);    // false
// console.log({ a: 42 } === { a: 42 }  )       // false
// console.log((x => x * 2) === (x => x * 2) )  // false

//class
// class Page {
//     constructor(text) {
//         this.text = text;
//     }

//     print() {
//         console.log(this.text);
//     }
// }

// class Notebook {
//     constructor() {
//         this.pages = [];
//     }

//     addPage(text) {
//         var page = new Page(text);
//         this.pages.push(page);
//     }

//     print() {
//         for (let page of this.pages) {
//             page.print();
//         }
//     }
// }

// var mathNotes = new Notebook();
// mathNotes.addPage("Arithmetic: + - * / ...");
// mathNotes.addPage("Trigonometry: sin cos tan ...");

// mathNotes.print();
// ..

// inheritance

// class Publication{
//     constructor(title,author,pubDate){
//         this.title = title
//         this.author = author
//         this.pubDate = pubDate
//     }
//     print(){
//         console.log(`Title: ${this.title} by ${this.author} $: ${this.pubDate}`)
//     }
// }
// class Book extends Publication{
//     constructor(bookDetails){
//         super(
//             bookDetails.title,
//             bookDetails.author,
//             bookDetails.publishedOn
//         )
//         this.publisher = bookDetails.publisher
//         this.IBN = bookDetails.IBN
//     }
//     print(){
//         super.print()
//         console.log(`Publisher ${this.publisher} IBN : ${this.IBN}`)
//     }
// }
// class BlogPost extends Publication{
//     constructor(title, author, pubDate, URL){
//         super(title,author, pubDate )
//         this.URL = URL
//     }
//     print(){
//         super.print()
//         console.log(this.URL)
//     }
// }